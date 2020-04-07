const {getPreset} = require('../../../private/getConfiguration');

module.exports = {
  'env': {
    'es2020': true,
    'jquery': true,
    'meteor': true,
    'node'  : true,
  },
  'extends': [
    getPreset('es6'),
    'plugin:meteor/recommended',
  ],
  'plugins': [
    'meteor',
  ],
  'globals': {
    'ReactiveVar'       : false,
    'TemplateController': false,
    'Tracker'           : false,
    'FlowRouter'        : false,
  },
  'rules': {
    'babel/new-cap': [
      'warn',
      {
        'capIsNewExceptions': [
          'Data',
          'Events',
          'RestGtm',
          'RestValidation',
          'TemplateController',
          'Validation',
        ],
      },
    ],
    'no-underscore-dangle': [
      'warn',
      {
        'allow': [
          '_uihooks',
          '_laq',
        ],
      },
    ],
  },
};
