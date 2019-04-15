module.exports = {
  env: {
    node: true,
    meteor: true,
    jquery: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: [
    './eslint-es6.config.js',
    'plugin:meteor/recommended',
  ],
  plugins: [
    'meteor',
  ],
  globals: {
    ReactiveVar: false,
    TemplateController: false,
    Tracker: false,
    FlowRouter: false,
  },
  rules: {
    'new-cap': ['warn', {capIsNewExceptions: ['TemplateController', 'Validation', 'Events', 'Data']}],
  },
};
