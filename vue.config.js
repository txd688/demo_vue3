const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 基本路径
  publicPath: process.env.VUE_APP_BASE_URL,
  outputDir: 'demo_vue3',
  assetsDir: 'Public',
  devServer: {
    port: 8989,
  }
})
