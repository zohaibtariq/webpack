const path = require('path');
module.exports = {
    mode: "production",/*development*/
    // mode: "development",/*production*/
    /*devtool: "none",*/
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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