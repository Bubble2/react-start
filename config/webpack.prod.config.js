var webpackMerge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

module.exports = webpackMerge(
    webpackBaseConfig,
    {
        output: {
            filename: 'js/[name].[chunkhash:8].js',
            chunkFilename: 'js/[name].[chunkhash:8].js',
            path: path.resolve(__dirname, '../' ,'dist')
        },
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../'  //css中引入背景图片会在图片url前面加上该路径
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
            //清楚dist目录文件
            new CleanWebpackPlugin(['dist'],{
                root: path.resolve(__dirname, '../')   //根目录
            }),
            //提取css为单独css文件
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css"
            })
        ],
        optimization: {
            splitChunks: {
              cacheGroups: {
                default: false,
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                }
              }
            },
            minimizer: [
                new UglifyJsPlugin({}),
                new OptimizeCSSAssetsPlugin({})
            ]
        }
    }
)