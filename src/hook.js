if (/MicroMessenger/i.test(window.navigator.userAgent)) {
  const script = document.createElement('script')
  script.textContent = '{{ WeixinJSBridge }}';
  document.documentElement.appendChild(script)
  script.parentNode.removeChild(script)
  console.debug('wechat-webview-debug is ready');
}
