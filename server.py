import http.server
import socketserver
import socket
import os
import sys
import logging
import signal
from datetime import datetime

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)

PORT = 8080
DIR = os.path.dirname(os.path.abspath(__file__))
MAX_REQUEST_SIZE = 8192  # 限制请求头大小，防止DoS
REQUEST_TIMEOUT = 30  # 请求超时时间（秒）

def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

os.chdir(DIR)

class SecureHTTPHandler(http.server.SimpleHTTPRequestHandler):
    """增强安全性的HTTP请求处理器"""
    
    # 忽略某些常见的无害错误
    suppress_logs = [
        'Connection reset by peer',
        'Broken pipe',
        'Connection aborted',
    ]
    
    def log_message(self, format, *args):
        """自定义日志格式，过滤无害错误"""
        message = format % args
        # 过滤常见的连接重置错误（这些是无害的）
        for suppress in self.suppress_logs:
            if suppress in str(message):
                return
        # 记录其他错误
        if 'error' in str(message).lower() or 'warning' in str(message).lower():
            logger.warning(f"请求处理警告: {message}")
        else:
            logger.info(f"{self.client_address[0]} - {message}")
    
    def log_error(self, format, *args):
        """自定义错误日志"""
        message = format % args
        # 过滤连接重置错误
        for suppress in self.suppress_logs:
            if suppress in str(message):
                return
        logger.error(f"请求错误: {message}")
    
    def handle_one_request(self):
        """处理单个请求，添加超时和错误处理"""
        try:
            self.raw_requestline = self.rfile.readline(MAX_REQUEST_SIZE + 1)
            if len(self.raw_requestline) > MAX_REQUEST_SIZE:
                self.send_error(414, '请求头过大')
                return
            if not self.raw_requestline:
                self.close_connection = True
                return
            if not self.parse_request():
                return
            self.do_method()
        except socket.timeout:
            # 客户端超时，这是正常的
            self.close_connection = True
        except ConnectionResetError:
            # 客户端重置连接，这是正常的（如页面刷新）
            self.close_connection = True
        except BrokenPipeError:
            # 客户端断开连接，这是正常的
            self.close_connection = True
        except Exception as e:
            # 记录其他异常，但不崩溃
            logger.error(f"处理请求时发生未预期错误: {type(e).__name__}: {e}")
            self.close_connection = True
    
    def do_method(self):
        """执行请求方法"""
        try:
            method_name = f'do_{self.command}'
            if hasattr(self, method_name):
                getattr(self, method_name)()
            else:
                self.send_error(501, f'不支持的请求方法: {self.command}')
        except Exception as e:
            logger.error(f"执行{self.command}请求时出错: {e}")
            self.close_connection = True
    
    def send_error(self, code, message=None, explain=None):
        """发送错误响应"""
        try:
            super().send_error(code, message, explain)
        except Exception:
            # 如果发送错误响应也失败，记录并关闭连接
            logger.error(f"发送错误响应失败: {code} {message}")
            self.close_connection = True

class ReusableTCPServer(socketserver.TCPServer):
    """可重用端口的TCP服务器"""
    allow_reuse_address = True
    allow_reuse_port = True
    
    def server_bind(self):
        """绑定服务器地址"""
        try:
            self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            if hasattr(socket, 'SO_REUSEPORT'):
                try:
                    self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEPORT, 1)
                except (AttributeError, OSError):
                    pass
        except Exception as e:
            logger.warning(f"设置套接字选项失败: {e}")
        super().server_bind()
    
    def handle_error(self, request, client_address):
        """处理请求处理过程中的错误"""
        exc_type, exc_value, exc_tb = sys.exc_info()
        # 过滤常见的无害错误
        if exc_type in (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            return  # 这些错误是正常的，不记录
        logger.error(f"处理请求时发生错误 (来自 {client_address}): {exc_type.__name__}: {exc_value}")

def signal_handler(signum, frame):
    """处理信号，优雅关闭服务器"""
    logger.info("\n收到停止信号，正在关闭服务器...")
    sys.exit(0)

def main():
    """主函数"""
    # 注册信号处理器
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    handler = SecureHTTPHandler
    handler.extensions_map.update({
        '.html': 'text/html; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.js': 'application/javascript; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
    })
    
    try:
        with ReusableTCPServer(("0.0.0.0", PORT), handler) as httpd:
            ip = get_ip()
            logger.info("=" * 50)
            logger.info("水韵农青服务器已启动")
            logger.info("=" * 50)
            logger.info(f"本机访问: http://localhost:{PORT}")
            logger.info(f"局域网访问: http://{ip}:{PORT}")
            logger.info(f"按 Ctrl+C 停止服务")
            logger.info("=" * 50)
            
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                logger.info("\n服务器已停止")
            except Exception as e:
                logger.error(f"服务器运行出错: {e}")
                sys.exit(1)
    except OSError as e:
        if 'Address already in use' in str(e):
            logger.error(f"端口 {PORT} 已被占用，请关闭占用该端口的程序或修改PORT配置")
        else:
            logger.error(f"服务器启动失败: {e}")
        sys.exit(1)
    except Exception as e:
        logger.error(f"服务器启动失败: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
