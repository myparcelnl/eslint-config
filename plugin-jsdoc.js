module.exports = {
  plugins: ['jsdoc'],
  settings: {
    jsdoc: {
      preferredTypes: {
        array: 'Array',
        string: 'String',
        number: 'Number',
      },
    },
  },
  rules: {
    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-indentation': 'off',
    'jsdoc/check-syntax': 'warn',
    'jsdoc/newline-after-description': 'warn',
    'jsdoc/no-undefined-types': 'warn',
    'jsdoc/require-description': 'off',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-example': 'off',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-param': 'warn',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-param-type': 'warn',
    'jsdoc/require-returns': 'warn',
    'jsdoc/require-returns-check': 'warn',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-returns-type': 'warn',
    'jsdoc/valid-types': 'warn',
  },
};
