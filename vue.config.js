const path = require("path");
module.exports = {
  runtimeCompiler: true,

  css: {
    modules: true
  },

  publicPath: undefined,
  outputDir: 'public/dist/',
  assetsDir: 'public/',
  productionSourceMap: undefined,
  parallel: undefined,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, "./src/assets/scss/app.scss")]
    }
  }
}
