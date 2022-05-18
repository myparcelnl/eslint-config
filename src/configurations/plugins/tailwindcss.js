/**
 * Note: If you're using preset-vue*, you need to disable either tailwindcss/classnames-order or
 * vue/static-class-names-order, depending on which functionality you want to preserve.
 */
module.exports = {
  'plugins': [
    'tailwindcss',
  ],
  'rules': {
    'tailwindcss/classnames-order'                  : 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand'                : 'warn',
    'tailwindcss/migration-from-tailwind-2'         : 'off',
    'tailwindcss/no-arbitrary-value'                : 'off',
    'tailwindcss/no-contradicting-classname'        : 'warn',
    'tailwindcss/no-custom-classname'               : 'warn',
  },
};
