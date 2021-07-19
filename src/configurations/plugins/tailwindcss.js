/**
 * Note: If you're using preset-vue*, you need to disable either tailwindcss/classnames-order or
 * vue/static-class-names-order, depending on which functionality you want to preserve.
 */
module.exports = {
  'plugins': [
    'tailwindcss',
  ],
  'rules': {
    'tailwindcss/classnames-order'          : 'warn',
    'tailwindcss/no-custom-classname'       : 'warn',
    'tailwindcss/no-contradicting-classname': 'warn',
  },
};
