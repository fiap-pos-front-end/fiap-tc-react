const path = require("path");
const nodeExternals = require("webpack-node-externals");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDev ? "development" : "production",
  target: "node",
  entry: "./server.cjs",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist-server"),
    filename: "server.cjs",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".cjs", ".js", ".jsx", ".ts", ".tsx"],
  },
  devtool: isDev ? "inline-source-map" : false,
};
