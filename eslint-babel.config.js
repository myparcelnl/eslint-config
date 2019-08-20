module.exports = {
  plugins: [
    'babel',
  ],
  rules: {
    'babel/new-cap': ['warn'],
    'babel/no-unused-expressions': 'warn',
    'babel/object-curly-spacing': ['warn', 'never'],
    'babel/quotes': ['warn', 'single'],
    'babel/semi': ['warn', 'always'],
  },
};
