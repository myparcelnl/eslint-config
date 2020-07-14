const {baseDir} = require('../../baseDir');
const {'rules': defaultRules} = require('./default');
const {'rules': es6Rules} = require('./es6');
const {getPreset} = require('../../getConfiguration');
const path = require('path');

/**
 * Overridden rules from other plugins or presets.
 */
const overrides = {
  // Default
  'brace-style'                : 'off',
  'camelcase'                  : 'off',
  'comma-spacing'              : 'off',
  'func-call-spacing'          : 'off',
  'indent'                     : 'off',
  'no-array-constructor'       : 'off',
  'no-empty-function'          : 'off',
  'no-extra-parens'            : 'off',
  'no-extra-semi'              : 'off',
  'no-implied-eval'            : 'off',
  'no-magic-numbers'           : 'off',
  'no-throw-literal'           : 'off',
  'no-unused-expressions'      : 'off',
  'no-unused-vars'             : 'off',
  'no-use-before-define'       : 'off',
  'quotes'                     : 'off',
  'semi'                       : 'off',
  'space-before-function-paren': 'off',

  // ES6
  'no-dupe-class-members' : 'off',
  'no-useless-constructor': 'off',
  'require-await'         : 'off',

  // Jsdoc plugin
  'jsdoc/require-param'       : 'off',
  'jsdoc/require-property'    : 'off',
  'jsdoc/require-returns'     : 'off',
  'jsdoc/require-returns-type': 'off',
  'jsdoc/require-param-type'  : 'off',
};

/**
 * Using this config requires you to have a tsconfig.json in your project.
 */
module.exports = {
  'parser' : '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
  ],
  'parserOptions': {
    'project': path.relative(baseDir, 'tsconfig.json'),
  },
  'extends': [
    getPreset('es6'),
  ],
  'settings': {
    'jsdoc': {
      'mode': 'typescript',
    },
  },
  'rules': {
    ...overrides,
    // Default extensions
    '@typescript-eslint/brace-style'         : defaultRules['brace-style'],
    '@typescript-eslint/func-call-spacing'   : defaultRules['func-call-spacing'],
    '@typescript-eslint/indent'              : defaultRules.indent,
    '@typescript-eslint/no-array-constructor': defaultRules['no-array-constructor'],
    '@typescript-eslint/no-empty-function'   : defaultRules['no-empty-function'],
    '@typescript-eslint/no-extra-parens'     : defaultRules['no-extra-parens'],
    '@typescript-eslint/no-extra-semi'       : defaultRules['no-extra-semi'],
    '@typescript-eslint/no-implied-eval'     : defaultRules['no-implied-eval'],
    '@typescript-eslint/no-magic-numbers'    : [
      'warn',
      {
        'ignoreEnums'                  : true,
        'ignoreNumericLiteralTypes'    : true,
        'ignoreReadonlyClassProperties': true,
      },
    ],
    '@typescript-eslint/no-throw-literal'           : defaultRules['no-throw-literal'],
    '@typescript-eslint/no-unused-expressions'      : defaultRules['no-unused-expressions'],
    '@typescript-eslint/no-unused-vars'             : defaultRules['no-unused-vars'],
    '@typescript-eslint/no-use-before-define'       : defaultRules['no-use-before-define'],
    '@typescript-eslint/quotes'                     : defaultRules.quotes,
    '@typescript-eslint/semi'                       : defaultRules.semi,
    '@typescript-eslint/space-before-function-paren': defaultRules['space-before-function-paren'],

    // ES6 extensions
    '@typescript-eslint/no-useless-constructor': es6Rules['no-useless-constructor'],
    '@typescript-eslint/require-await'         : es6Rules['require-await'],

    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type'                  : 'warn',
    '@typescript-eslint/await-thenable'              : 'warn',
    '@typescript-eslint/ban-ts-comment'              : 'warn',
    '@typescript-eslint/ban-types'                   : 'warn',
    '@typescript-eslint/consistent-type-assertions'  : 'warn',
    '@typescript-eslint/consistent-type-definitions' : [
      'warn',
      'interface',
    ],
    '@typescript-eslint/default-param-last'            : 'warn',
    '@typescript-eslint/explicit-function-return-type' : 'warn',
    '@typescript-eslint/explicit-member-accessibility' : 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/member-delimiter-style'        : 'warn',
    '@typescript-eslint/member-ordering'               : 'warn',
    '@typescript-eslint/naming-convention'             : [
      'warn',
      {
        'selector': 'default',
        'format'  : [
          'camelCase',
        ],
      },
      {
        'selector': 'variable',
        'format'  : [
          'camelCase',
          'UPPER_CASE',
        ],
      },
      {
        'selector': 'property',
        'format'  : [
          'camelCase',
          'PascalCase',
        ],
      },
      {
        'selector': 'typeLike',
        'format'  : [
          'PascalCase',
        ],
      },
      {
        'selector': 'enumMember',
        'format'  : [
          'UPPER_CASE',
        ],
      },
    ],
    '@typescript-eslint/no-dynamic-delete'                  : 'warn',
    '@typescript-eslint/no-empty-interface'                 : 'warn',
    '@typescript-eslint/no-explicit-any'                    : 'warn',
    '@typescript-eslint/no-extra-non-null-assertion'        : 'warn',
    '@typescript-eslint/no-extraneous-class'                : 'warn',
    '@typescript-eslint/no-floating-promises'               : 'warn',
    '@typescript-eslint/no-for-in-array'                    : 'warn',
    '@typescript-eslint/no-inferrable-types'                : 'warn',
    '@typescript-eslint/no-misused-new'                     : 'warn',
    '@typescript-eslint/no-misused-promises'                : 'warn',
    '@typescript-eslint/no-namespace'                       : 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/no-non-null-assertion'              : 'warn',
    '@typescript-eslint/no-parameter-properties'            : 'warn',
    '@typescript-eslint/no-require-imports'                 : 'off',
    '@typescript-eslint/no-this-alias'                      : 'warn',
    '@typescript-eslint/no-type-alias'                      : 'warn',
    '@typescript-eslint/no-unnecessary-condition'           : 'off',
    '@typescript-eslint/no-unnecessary-qualifier'           : 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments'      : 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion'      : 'warn',
    '@typescript-eslint/no-unsafe-call'                     : 'off',
    '@typescript-eslint/no-unsafe-member-access'            : 'off',
    '@typescript-eslint/no-unsafe-return'                   : 'off',
    '@typescript-eslint/no-unused-vars-experimental'        : 'warn',
    '@typescript-eslint/no-var-requires'                    : 'warn',
    '@typescript-eslint/prefer-for-of'                      : 'warn',
    '@typescript-eslint/prefer-function-type'               : 'warn',
    '@typescript-eslint/prefer-includes'                    : 'warn',
    '@typescript-eslint/prefer-namespace-keyword'           : 'warn',
    '@typescript-eslint/prefer-nullish-coalescing'          : 'warn',
    '@typescript-eslint/prefer-optional-chain'              : 'warn',
    '@typescript-eslint/prefer-readonly'                    : 'off',
    '@typescript-eslint/prefer-readonly-parameter-types'    : 'off',
    '@typescript-eslint/prefer-regexp-exec'                 : 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with'     : 'warn',
    '@typescript-eslint/promise-function-async'             : 'warn',
    '@typescript-eslint/require-array-sort-compare'         : 'off',
    '@typescript-eslint/restrict-plus-operands'             : 'warn',
    '@typescript-eslint/restrict-template-expressions'      : 'off',
    '@typescript-eslint/return-await'                       : 'warn',
    '@typescript-eslint/strict-boolean-expressions'         : 'off',
    '@typescript-eslint/triple-slash-reference'             : 'warn',
    '@typescript-eslint/type-annotation-spacing'            : 'warn',
    '@typescript-eslint/typedef'                            : [
      'warn',
      {
        'arrowParameter'                   : false,
        'objectDestructuring'              : false,
        'variableDeclarationIgnoreFunction': true,
      },
    ],
    '@typescript-eslint/unbound-method'    : 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
  },
};
