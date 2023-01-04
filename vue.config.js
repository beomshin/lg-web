const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '/law': {
        target : 'http://localhost:19001',
        changeOrigin: true,
      }
    }
  }
})
