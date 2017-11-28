var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exportsb = merge(prodEnv, {
    NODE_ENV: '"development"'
})