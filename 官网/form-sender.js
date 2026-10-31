/*!
 * 水韵农青 · 表单提交模块
 * 后端：FormSubmit（https://formsubmit.co）—— 提交后直接发送邮件到指定邮箱，无需服务器。
 *
 * 用法：
 *   <script src="form-sender.js"></script>
 *   window.synqSendForm({ '姓名': '张三' }, '邮件主题').then(function (r) {
 *     r.ok    // true=已成功送达邮件服务
 *     r.error // 失败原因（已转成中文字面提示）
 *   });
 *
 * 注意：
 * 1. 中文键名会原样作为邮件里的字段标签，所以这里用中文字段名，方便手机上看邮件。
 * 2. 页面必须通过 http(s) 打开，直接双击本地 HTML 文件提交会失败（FormSubmit 的限制）。
 * 3. 首次使用前需要在收件邮箱里点击 FormSubmit 发来的激活链接。
 */
(function (global) {
  'use strict';

  var CONFIG = {
    endpoint: 'https://formsubmit.co/ajax/synq666@163.com',
    timeout: 18000
  };

  function humanize(message) {
    if (!message) return '提交失败，请稍后重试';
    if (/needs Activation/i.test(message)) {
      return '表单服务尚未激活，请稍后重试或直接联系邮箱 synq666@163.com';
    }
    if (/web server/i.test(message)) {
      return '请在正式网址下提交（本地双击打开 HTML 无法提交）';
    }
    return message;
  }

  function send(payload, subject) {
    var body = {
      _subject: subject || '【水韵农青】新表单提交',
      _captcha: 'false',
      _template: 'table'
    };
    for (var key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) body[key] = payload[key];
    }

    var controller = null;
    var options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(body)
    };
    if (typeof global.AbortController === 'function') {
      controller = new global.AbortController();
      options.signal = controller.signal;
    }
    var timer = global.setTimeout(function () {
      if (controller) controller.abort();
    }, CONFIG.timeout);

    return global.fetch(CONFIG.endpoint, options)
      .then(function (res) {
        return res.json().then(
          function (json) { return { status: res.status, ok: res.ok, json: json || {} }; },
          function () { return { status: res.status, ok: res.ok, json: {} }; }
        );
      })
      .then(function (r) {
        global.clearTimeout(timer);
        var accepted = r.json.success === true || r.json.success === 'true';
        if (r.ok && accepted) return { ok: true, data: r.json };
        return { ok: false, error: humanize(r.json.message || ('HTTP ' + r.status)) };
      })
      .catch(function (err) {
        global.clearTimeout(timer);
        var reason = err && err.name === 'AbortError' ? '网络超时' : ((err && err.message) || '网络异常');
        return { ok: false, error: reason + '，请检查网络后重试' };
      });
  }

  global.synqSendForm = send;
  global.SYNQ_FORM_CONFIG = CONFIG;
})(window);
