module.exports = {
  staticDirs: ['../public'],
  stories: [
    '../src/components/**/stories.@(js|jsx|ts|tsx)',
    '../src/components/ui/**/stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  // framework: '@storybook/react',
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  // webpackFinal: (config) => {
  //   /**
  //    * Add support for alias-imports
  //    * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
  //    */
  //   config.resolve.alias = {
  //     ...config.resolve?.alias,
  //     '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')]
  //   }

  //   /**
  //    * Fixes font import with /
  //    * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
  //    */
  //   config.resolve.roots = [
  //     path.resolve(__dirname, '../public'),
  //     'node_modules'
  //   ]

  //   return config
  // }
}
