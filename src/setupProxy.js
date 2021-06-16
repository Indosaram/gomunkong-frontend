const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: "192.168.64.3:30007",
            changeOrigin: true,

        })

    );
};