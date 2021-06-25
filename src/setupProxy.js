const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/proxy-api',
    createProxyMiddleware({
      // target: 'https://www.zhihu.com',
      target: 'http://localhost:3001', //本地mock server
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/proxy-api': '' // 请求中去除/api
      }
    })
  )
}
