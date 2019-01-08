var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../' ,'src/index.js')
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader', //主要用于编译es6语法和react的jsx语法
                    query: {
                        cacheDirectory: true  //开启缓存，提升速度
                    }
                    //options请看.babelrc文件
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        outputPath: 'images/',
                        name: '[name].[hash:8].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webapp-demo',
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ],
    resolve:{
        extensions: ['.js','.jsx'],
        alias: {
            components: path.resolve(__dirname, '../', 'src/components'),
            style: path.resolve(__dirname, '../', 'src/style'),
            images: path.resolve(__dirname, '../', 'src/images')
        }
    }
}