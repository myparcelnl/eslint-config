module.exports = {
  'settings': {
    'jsdoc': {
      'preferredTypes': {
        'string':  'String',
        'boolean': 'Boolean',
        'object':  'Object',
        'number':  'Number',
      },
    },
  },
  'plugins': [
    'jsdoc',
  ],
  'rules': {
    'jsdoc/check-alignment':                         'warn',
    'jsdoc/check-examples':                          'off',
    'jsdoc/check-indentation':                       'off',
    'jsdoc/check-param-names':                       'warn',
    'jsdoc/check-syntax':                            'warn',
    'jsdoc/check-tag-names':                         'off',
    'jsdoc/check-types':                             'warn',
    'jsdoc/implements-on-classes':                   'off',
    'jsdoc/match-description':                       'off',
    'jsdoc/newline-after-description':               'warn',
    'jsdoc/no-types':                                'off',
    'jsdoc/no-undefined-types':                      'warn',
    'jsdoc/require-description':                     'off',
    'jsdoc/require-description-complete-sentence':   'warn',
    'jsdoc/require-example':                         'off',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-jsdoc':                           'warn',
    'jsdoc/require-param':                           'warn',
    'jsdoc/require-param-description':               'warn',
    'jsdoc/require-param-name':                      'warn',
    'jsdoc/require-param-type':                      'warn',
    'jsdoc/require-returns':                         'warn',
    'jsdoc/require-returns-check':                   'warn',
    'jsdoc/require-returns-description':             'off',
    'jsdoc/require-returns-type':                    'warn',
    'jsdoc/valid-types':                             'warn',
  },
};
