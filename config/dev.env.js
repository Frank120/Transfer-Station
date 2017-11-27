const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exportsb = merge(prodEnv, {
    NODE_ENV: '"development"'
})