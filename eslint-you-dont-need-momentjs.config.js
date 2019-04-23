module.exports = {
  plugins: [
    'you-dont-need-momentjs'
  ],
  rules: {
    'you-dont-need-momentjs/no-dynamic-import-moment': 'warn',
    'you-dont-need-momentjs/no-import-moment': 'warn',
    'you-dont-need-momentjs/no-moment-constructor': 'warn',
    'you-dont-need-momentjs/no-require-moment': 'warn',
  },
};
