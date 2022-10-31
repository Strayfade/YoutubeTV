const { app, BrowserWindow, session } = require('electron');
app.whenReady().then(function() {
    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.77 Large Screen Safari/534.24 GoogleTV/092754';
        callback({ cancel: false, requestHeaders: details.requestHeaders });
    });
    new BrowserWindow({ fullscreen: true }).loadURL('https://youtube.com/tv');
});