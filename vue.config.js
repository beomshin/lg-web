const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  // publicPath:'/lg',
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "../lg-was/src/main/resources/static"),
  devServer : {
    proxy : {
      '/': {
        target : 'http://localhost:19001',
        changeOrigin: true,
      }
    }
  },
  configureWebpack: config => {
    config.output.filename = 'js/[name].[hash].js'
    config.output.chunkFilename = 'js/[name].[hash].js'
  }
})
