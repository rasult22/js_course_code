/* global require __dirname module */
const path = require('path');

const conf = {
    entry: './es6/script.js',
    output: {
        path: path.resolve(__dirname,'./js'),
        filename: 'main.js',
        publicPath: 'js/'
    },
    devServer:{
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules'
            }

        ]
    }
}


module.exports = (env, options) =>{
    conf.devtool = options.mode === "production" ? 
                    false : 
                    "eval-cheap-module-source-map";
    return conf;
};