module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://mtop.damai.cn",
        changeOrigin: true,
        pathRewrite: {
          "^api": ""
        }
      }
    }
  }
}
