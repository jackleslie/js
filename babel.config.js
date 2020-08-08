const mainConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

const umdConfig = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-modules-umd'],
};

const minifyConfig = {
  presets: ['@babel/preset-env', 'minify'],
};

module.exports = {
  env: {
    main: mainConfig,
    umd: umdConfig,
    minify: minifyConfig,
    test: mainConfig,
  },
};
