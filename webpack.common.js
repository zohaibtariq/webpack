module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js",
    },
    module: {
        rules: [
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