const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  async headers() {
    return [
      {
        source: "/_next/static/chunks/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "mfereact",
        exposes: {
          "./mount": "./bootstrap.tsx",
        },
        filename: "static/chunks/remoteEntry.js",
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    );

    return config;
  },
};
