const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/proxy-api',
    createProxyMiddleware({
      target: 'https://www.zhihu.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/proxy-api': '' // 请求中去除/api
      }
    })
  )
}
