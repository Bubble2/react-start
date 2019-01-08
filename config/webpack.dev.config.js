var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var path = require('path');
var webpackBaseConfig = require('./webpack.base.config');

module.exports = webpackMerge(
    webpackBaseConfig,
    {
        output: {
            filename: '[name].js'
        },
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            port: 8080,
            compress: true,
            disableHostCheck: true,
            host: '0.0.0.0',
            hot: true,
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2, //使用import之前还要经过几次loader
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                config: {
                                    path: path.resolve(__dirname, './postcss.config.js')  //使用postcss单独的配置文件
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
) 