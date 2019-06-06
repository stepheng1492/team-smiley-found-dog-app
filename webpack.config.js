const path = require('path');

const SRC = path.join(__dirname, '/client/src');
const DIST = path.join(__dirname, '/client/dist');

module.exports = {
    watch: true,
    mode: 'production',
    entry: `${SRC}/index.jsx`,
    module: {
        rules: [
            {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
    ]
    },
    output: {
        filename: 'bundle.js',
        path: DIST,
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
      },
};    