const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    // Addons
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register',
    '@storybook/addon-storysource/register',
    // Presets
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, './tsconfig.json'),
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, './tsconfig.json'),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../.storybook'),
        ],
      },
    },
  ],
}
