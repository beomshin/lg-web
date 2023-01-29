const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "./docker/dist"),
  devServer : {
    proxy : {
      '/lg': {
        target : 'http://192.168.0.2:19001',
        changeOrigin: true,
      }
    }
  }
})
