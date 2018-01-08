const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devServer: {
        contentBase: "./public",
        hot: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:['babel-loader?cacheDirectory=true'],
                exclude: ['/node_modules']
            }
        ]
    }
}