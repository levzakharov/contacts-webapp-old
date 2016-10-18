const path = require('path');
const webpack = require('webpack');
/* global __dirname */

module.exports = {
    entry: path.join(__dirname, 'src', 'main', 'app', 'modules', 'main'),
    output: {
        path: path.join(__dirname, 'target', 'webpack', 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
};