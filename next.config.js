const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "mfereact",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./mount": "./bootstrap.tsx",
        },
        extraOptions: {
          publicPath: "http://localhost:4300/",
        },
      })
    );

    return config;
  },
};
