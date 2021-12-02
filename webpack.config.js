const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// MODULE.EXPORTS POCETAK
module.exports = {
  mode: "development",
  entry: path.resolve("./src/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  // MODULE POCETAK
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // PLUGINS=========
  plugins: [new MiniCssExtractPlugin()],
  devtool: "source-map",
  devServer: {
    static: "./",
    hot: true,
  },
};
