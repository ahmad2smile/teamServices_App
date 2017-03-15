var development = process.env.NODE_ENV !== "production";

var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require("webpack");


const config = {
    entry: "./index.js",
    devtool: development ? "inline-sourcemap" : "",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: development ?
            [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: ["style-loader", "css-loader", "sass-loader", "resolve-url-loader"]
                },
                {
                    test: [/\.js$/, /\.jsx$/],
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(ttf|eot|svg|woff(?:2)?)(\?[a-z0-9]+)?$/,
                    loader: 'url-loader'
                }
            ]
            :
            [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "sass-loader", "resolve-url-loader"]
                    })
                },
                {
                    test: [/\.js$/, /\.jsx$/],
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(ttf|eot|svg|woff(?:2)?)(\?[a-z0-9]+)?$/,
                    loader: 'url-loader'
                }
            ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open: true,
        inline: true,
        hot: true
    },
    plugins: development ?
        [
            new HtmlWebpackPlugin({
                title: "Cross Task",
                minify: {
                    collapseWhitespace: true
                },
                hash: true,
                template: "./src/index.html"
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ]
        :
        [
            new HtmlWebpackPlugin({
                title: "Cross Task",
                minify: {
                    collapseWhitespace: true
                },
                hash: true,
                template: "./src/index.html"
            }),
            new ExtractTextPlugin("app.bundle.css"),
            new webpack.NamedModulesPlugin()
        ]
}
module.exports = config;