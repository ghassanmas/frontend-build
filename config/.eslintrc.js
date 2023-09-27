const { babel } = require('../lib/presets');

module.exports = {
  // Docs for formatjs plugin:
  // https://formatjs.io/docs/tooling/linter/#react
  plugins: ['formatjs'],
  extends: '@edx/eslint-config',
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: true,
    babelOptions: {
      configFile: babel.resolvedFilepath || babel.defaultFilepath,
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config.*',
          '**/*.test.*',
          '**/setupTest.js',
        ],
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          'env.config',
        ],
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/340#issuecomment-338424908
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
    }],
    'import/no-import-module-export': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'formatjs/enforce-description': ['error', 'literal'],
  },
  globals: {
    newrelic: false,
  },
  ignorePatterns: [
    'module.config.js',
  ],
};
