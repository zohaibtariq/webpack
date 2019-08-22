const path                      = require("path");
const common                    = require("./webpack.common");
const merge                     = require("webpack-merge");
const { CleanWebpackPlugin }    = require("clean-webpack-plugin");
const MiniCssExtractPlugin      = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin   = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin       = require('terser-webpack-plugin');
const HtmlWebpackPlugin         = require("html-webpack-plugin");
module.exports = merge(common, {
    mode: "production",
    /*devtool: "none",*/
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization:{
        minimizer:[
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 3 - Extract css into new files
                    "css-loader",   // 2 - turn css to common js
                    "sass-loader"   // 1 - turn scss to css
                ]
            }
        ]
    }
});