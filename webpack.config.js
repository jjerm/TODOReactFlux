const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //production or development
    mode:"development",
    entry: './src/index.jsx',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.s?css$/,
                exclude: /(node_modules|bower_components)/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]

            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/assets/index.html"
        })
    ]
};

