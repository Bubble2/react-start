const path = require('path');
const webpack = require('webpack');

module.exports={
    entry:{
        'app':[
            'react-hot-loader/patch',
            './src/app'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool:'inline-source-map',
    devServer:{
        hot:true,
        compress:true,
        contentBase:'./dist'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    'react-hot-loader/webpack',
                    'babel-loader'
                ],
                exclude:'/node_modules/'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}