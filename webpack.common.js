const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js",
    },
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
                    "style-loader", // 2 - inject styles into DOM
                    "css-loader",   // 1 - turn css to common js
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3 - inject styles into DOM
                    "css-loader",   // 2 - turn css to common js
                    "sass-loader"   // 1 - turn scss to css
                ]
            },
            {
                test: /\.html/,
                use: [
                    "html-loader" // 1 - require src defined on image
                ]
            },
            {
                test: /\.(svg|png|jpe?g|jpeg|gif)$/,
                use: {
                    loader: "file-loader",   // load files
                    options: {
                        name(file) {
                            if (process.env.NODE_ENV === 'development')
                                return '[path][name].[ext]';
                            return '[contenthash].[ext]';
                        },
                        outputPath: "images"
                    }
                }
            }
        ]
    }
};