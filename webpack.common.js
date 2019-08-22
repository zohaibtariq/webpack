const ImageminPlugin = require("imagemin-webpack");
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
                use: [
                    {
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
                ]
            }
        ]
    },
    plugins: [
        // Make sure that the plugin is after any plugins that add images, example `CopyWebpackPlugin`
        new ImageminPlugin({
            bail: false, // Ignore errors on corrupted images
            cache: true,
            imageminOptions: {
                // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ["mozjpeg"],
                    ["pngquant"],
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    [
                        "svgo",
                        {
                            plugins: [
                                {
                                    removeViewBox: false
                                }
                            ]
                        }
                    ]
                ]
            }
        })
    ]
};