module.exports = {
  plugins: [
    'babel',
  ],
  rules: {
    'new-cap': 'off',
    'no-unused-expressions': 'off',
    'object-curly-spacing': 'off',
    'quotes': 'off',
    'semi': 'off',

    'babel/new-cap': ['warn'],
    'babel/no-unused-expressions': 'warn',
    'babel/object-curly-spacing': ['warn', 'never'],
    'babel/quotes': ['warn', 'single'],
    'babel/semi': ['warn', 'always'],
  },
};
