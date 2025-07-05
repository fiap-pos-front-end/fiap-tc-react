const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/bootstrap.tsx",
  mode: "production",
  target: "web",

  experiments: {
    outputModule: true,
  },

  output: {
    publicPath: "auto",
    module: true,
    clean: true,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "react_remote",
      filename: "remoteEntry.js",
      library: { type: "module" },

      exposes: {
        "./mount": "./src/bootstrap.tsx",
      },
      remotes: {
        mfeShell: "http://localhost/fiap-tc-shell/remoteEntry.js",
      },

      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^19.1.0" },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.1.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],

  devServer: {
    port: 4300,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
  },
};
