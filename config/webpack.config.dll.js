// dllPlugin 动态链接库
let path = require('path');
const paths = require('./paths');

let webpack = require('webpack');
module.exports = {
    mode: 'production',
    entry: {
        vendor: ['react', 'react-dom', 'react-router-dom'],
    },
    output: {
        filename: '_dll_[name].js',
        path: path.resolve(__dirname, paths.appDll),
        library: '_dll_[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname, paths.appDll, 'manifest.json'),
        }),
    ],
}