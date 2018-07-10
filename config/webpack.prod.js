var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var helpers = require("./helpers");
var commonConfig = require("./webpack.common.js");
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ENV = (process.env.NODE_ENV = process.env.ENV = "production");

module.exports = webpackMerge(commonConfig, {
  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  devtool: "source-map",

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */
  output: {
    path: helpers.root('dist'),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },

  plugins: [
    // Reference: https://github.com/webpack/extract-text-webpack-plugin
    // Extract css files
    // Disabled when in test mode or not in build mode
    new ExtractTextWebpackPlugin({
      filename: "css/[name].css",
      disable: false,
      allChunks: true
    }),
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Reference: https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
    // Minify all javascript, switch loaders to minimizing mode
    new UglifyJSPlugin(),

    // Copy assets from the public folder
    // Reference: https://github.com/kevlened/copy-webpack-plugin
    new CopyWebpackPlugin([
      {
        from: helpers.root('./src/assets/')
      }
    ]),
    new BundleAnalyzerPlugin()
  ]
});
