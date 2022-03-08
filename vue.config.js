const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const IS_PROD = ['production', 'test'].includes(process.env.NODE_APP_ENV)
module.exports = defineConfig({
  transpileDependencies: true,
  // 基本路径
  publicPath: process.env.VUE_APP_BASE_URL,
  outputDir: 'demo_vue3',
  assetsDir: 'Public',
  chainWebpack: config => {
    if(IS_PROD){
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ]);
    }
  },
  devServer: {
    port: 8989,
  }
})
