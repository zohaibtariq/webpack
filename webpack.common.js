const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 2 - inject styles into DOM
                    'css-loader',   // 1 - turn css to common js
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3 - inject styles into DOM
                    'css-loader',   // 2 - turn css to common js
                    'sass-loader'   // 1 - turn scss to css
                ]
            }
        ]
    }
};