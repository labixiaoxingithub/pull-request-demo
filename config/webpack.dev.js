var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

module.exports = webpackMerge(commonConfig, {
  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  devtool: "eval-source-map",

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */
  output: {
    path: helpers.root("dist"),
    publicPath: "http://localhost:3000/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },

  plugins: [
    new ExtractTextWebpackPlugin('styles/styles.css'),
    new webpack.HotModuleReplacementPlugin()],

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  devServer: {
    port: 3000,
    open: true,
    stats: "minimal",
    historyApiFallback: true
  }
});
