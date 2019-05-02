module.exports = {
  env: {
    node: true,
    meteor: true,
    jquery: true,
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
    'babel/new-cap': ['warn', {capIsNewExceptions: ['TemplateController', 'Validation', 'Events', 'Data']}],
    'no-underscore-dangle': ['warn', {allow: ['_uihooks', '_laq']}],
  },
};
