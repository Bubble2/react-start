var webpackDevConfig = require('./config/webpack.dev.config');
var wepackProdConfig = require('./config/webpack.prod.config');

var webpackConfig = {};

module.exports = (env, argv) => {
    switch(argv.mode){
        case 'development':
            webpackConfig = webpackDevConfig;
            break;
        case 'production':
            webpackConfig = wepackProdConfig;
            break;
        default:
            break;
    }
    return webpackConfig
}