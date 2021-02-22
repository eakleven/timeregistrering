const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{loader: "style-loader"}, {loader: "css-loader"}]

            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{loader: "file-loader"}]
            }
        ],

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './public'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
        })]
    }
};