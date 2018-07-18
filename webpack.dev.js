const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    devServer: {
        host: 'localhost',
        port: 8181,
        open: true,
    }
});
