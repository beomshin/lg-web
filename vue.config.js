const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "./docker/dist"),
  devServer : {
    proxy : {
      '/law': {
        target : 'http://localhost:19001',
        changeOrigin: true,
      }
    }
  }
})
