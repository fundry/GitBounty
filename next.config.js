module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },

  devIndicators: {
    autoPrerender: false
  },
  env: {
    CLIENT_ID: "0db14f58ca77506e9c7e"
  }
};
