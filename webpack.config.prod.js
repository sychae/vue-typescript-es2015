var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
process.env.NODE_ENV = 'production';

var defConfig = require('./webpack.config.base')
var buildConfig = merge(defConfig, {
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
        NODE_ENV: '"production"'
        }
    }),
  ]
});

//console.log("buildConfig", buildConfig.optimization.minimize);

module.exports = buildConfig;

