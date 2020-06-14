module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    return config;
  },
};
