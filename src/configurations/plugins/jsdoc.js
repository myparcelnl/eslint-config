const arrayPreferredType = {
  'message': 'Please define a type explicitly. Example: String[]',
};

module.exports = {
  'settings': {
    'jsdoc': {
      'preferredTypes': {
        'Array'   : arrayPreferredType,
        'Array.<>': '[]',
        'Array<>' : '[]',
        'Boolean' : 'boolean',
        'Integer' : 'number',
        'Number'  : 'number',
        'Promise' : 'Promise<*>',
        'String'  : 'string',
        'array'   : 'Array',
        'event'   : 'Event',
        'integer' : 'number',
        'object'  : 'Object',
        'promise' : 'Promise',
        '*'       : {
          'message': 'Type * is not allowed. Please define a type explicitly.',
        },
      },
      'tagNamePreference': {
        'TODO'    : 'todo',
        'arg'     : 'param',
        'argument': 'param',
        'link'    : 'see',
        'return'  : 'returns',
      },
    },
  },
  'plugins': [
    'jsdoc',
  ],
  'rules': {
    'jsdoc/check-access'                           : 'off',
    'jsdoc/check-alignment'                        : 'warn',
    'jsdoc/check-examples'                         : 'off',
    'jsdoc/check-indentation'                      : 'off',
    'jsdoc/check-param-names'                      : 'warn',
    'jsdoc/check-property-names'                   : 'warn',
    'jsdoc/check-syntax'                           : 'warn',
    'jsdoc/check-tag-names'                        : 'warn',
    'jsdoc/check-types'                            : 'warn',
    'jsdoc/check-values'                           : 'warn',
    'jsdoc/empty-tags'                             : 'warn',
    'jsdoc/implements-on-classes'                  : 'off',
    'jsdoc/match-description'                      : 'off',
    'jsdoc/newline-after-description'              : 'warn',
    'jsdoc/no-bad-blocks'                          : 'off',
    'jsdoc/no-defaults'                            : 'off',
    'jsdoc/no-types'                               : 'off',
    'jsdoc/no-undefined-types'                     : 'warn',
    'jsdoc/require-description'                    : 'off',
    'jsdoc/require-description-complete-sentence'  : 'warn',
    'jsdoc/require-example'                        : 'off',
    'jsdoc/require-file-overview'                  : 'off',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-jsdoc'                          : 'warn',
    'jsdoc/require-param'                          : 'warn',
    'jsdoc/require-param-description'              : 'off',
    'jsdoc/require-param-name'                     : 'warn',
    'jsdoc/require-param-type'                     : 'warn',
    'jsdoc/require-property'                       : 'off',
    'jsdoc/require-property-description'           : 'off',
    'jsdoc/require-property-name'                  : 'warn',
    'jsdoc/require-property-type'                  : 'warn',
    'jsdoc/require-returns'                        : 'warn',
    'jsdoc/require-returns-check'                  : 'warn',
    'jsdoc/require-returns-description'            : 'off',
    'jsdoc/require-returns-type'                   : 'warn',
    'jsdoc/valid-types'                            : 'warn',
  },
};
