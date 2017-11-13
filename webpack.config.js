var webpack = require('webpack');
var path = require('path');

var config = {
    entry : {
        app : path.join(__dirname, 'src', 'index.js')
    },
    output : {
        filename : 'bundle.js',
        path : path.join(__dirname,'dist')
    },
    devServer : {
        contentBase : path.join(__dirname, 'dist')
    }
};

module.exports = config;