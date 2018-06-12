/*global module*/
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'airbnb-base'
  ],
  env: {
    browser: true
  },
  rules: {
    // This rule has no support for @ember import system.
    // Ember build have their own mechanism to managing dependency.
    // Ember build will raise error on build if there is an import error.
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    // Ember use underscore dangling, e.g _super. Which is enforced by ember's
    // own linter to be used on init() method.
    'no-underscore-dangle': 'off',
    // Ember Routes and tests utilize `this` inside their callback.
    'prefer-arrow-callback': 'off',
  },
  overrides: [
    // node files
    {
      files: [
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
