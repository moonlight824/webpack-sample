const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/main.ts',
    },
    resolve: {
        extensions: ['.ts', '.js', '.sass']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[id].[countenthash].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // new BundleAnalyzerPlugin(),  // for test
    ]
}