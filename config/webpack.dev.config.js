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
            historyApiFallback: true,
            proxy: {
                '/api/': {
                    target: 'https://www.easy-mock.com/mock/5c2ec646178a5d7958d8d151/',
                    changeOrigin: true
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
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
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                                javascriptEnabled: true
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