var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
process.env.NODE_ENV = 'development';

var defConfig = require('./webpack.config.base')
var buildConfig = merge(defConfig, {
  optimization: {
    minimize: false,
  },
  devServer: {
    contentBase: false
  },
  plugins: [

  ]
});

//console.log("buildConfig", buildConfig.optimization.minimize);

module.exports = buildConfig;

