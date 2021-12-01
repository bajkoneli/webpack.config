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

  // PLUGINS=========
  plugins: [new MiniCssExtractPlugin()],

  // MODULE POCETAK
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
  devtool: "source-map",
  devServer: {
    static: "./",
  },
};
