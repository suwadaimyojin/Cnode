
const webpack = require('webpack')
const path = require("path");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('md')
            .test(/\.md/)
            .use('html-loader')
            .loader('html-loader')
            .end()
            .use('markdown-loader')
            .loader('markdown-loader')
            .end()
    },
publicPath: './',
outputDir: 'dist'

}
