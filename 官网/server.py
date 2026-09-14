import http.server
import socketserver
import socket
import os

PORT = 8080
DIR = os.path.dirname(os.path.abspath(__file__))

def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    except:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

os.chdir(DIR)

handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map.update({
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
})

with socketserver.TCPServer(("0.0.0.0", PORT), handler) as httpd:
    ip = get_ip()
    print(f"服务已启动")
    print(f"本机访问: http://localhost:{PORT}")
    print(f"局域网访问: http://{ip}:{PORT}")
    print(f"按 Ctrl+C 停止服务")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务已停止")
