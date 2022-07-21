const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        home: "./src/index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "Todo",
            template : "./src/templates/main.html",
            chunks:["home"],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static:"./dist",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
}