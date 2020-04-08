
const webpack = require('webpack')
const path = require("path");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
 /*   devServer: {
        proxy: {
            '/topic_collect/': {
                target: "https://cnodejs.org/api/v1/topic_collect",
                changeOrigin: true,
                pathRewrite: {
                    '^/topic_collect/': ''
                }
            }
        }

    },*/
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
