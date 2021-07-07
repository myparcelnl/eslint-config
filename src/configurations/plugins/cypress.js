module.exports = {
  'plugins': [
    'cypress',
  ],
  'env': {
    'cypress/globals': true,
  },
  'rules': {
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-assigning-return-values' : 'warn',
    'cypress/no-async-tests'             : 'warn',
    'cypress/no-force'                   : 'warn',
    'cypress/no-unnecessary-waiting'     : 'warn',
  },
};
