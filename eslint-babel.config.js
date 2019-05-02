module.exports = {
  plugins: [
    'babel',
  ],
  rules: {
    // Disable original rules before adding babel versions
    'new-cap': 'off',
    'camelcase': 'off',
    'no-invalid-this': 'off',
    'object-curly-spacing': 'off',
    'quotes': 'off',
    'semi': 'off',
    'no-unused-expressions': 'off',
    'valid-typeof': 'off',

    // Values copied from `eslint.config.js`
    'babel/camelcase': ['warn', {'properties': 'never', 'ignoreDestructuring': true}],
    'babel/new-cap': ['warn'],
    'babel/no-unused-expressions': 'warn',
    'babel/object-curly-spacing': ['warn', 'never'],
    'babel/quotes': ['warn', 'single'],
    'babel/semi': ['warn', 'always'],
  },
};
