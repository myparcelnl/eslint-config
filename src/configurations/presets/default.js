module.exports = {
  'env': {
    'browser': true,
  },
  'extends': [
    '../plugins/jsdoc.js',
    '../plugins/you-dont-need-momentjs.js',
  ],
  'rules': {
    'accessor-pairs'       : 'off',
    'array-bracket-newline': [
      'warn',
      'consistent',
    ],
    'array-bracket-spacing': [
      'warn',
      'never',
    ],
    'array-callback-return': 'warn',
    'array-element-newline': [
      'warn',
      'consistent',
    ],
    'block-scoped-var': 'warn',
    'block-spacing'   : 'warn',
    'brace-style'     : [
      'warn',
      '1tbs',
    ],
    'callback-return': 'off',
    'camelcase'      : [
      'warn',
      {
        'ignoreDestructuring': true,
        'ignoreImports'      : true,
        'properties'         : 'never',
      },
    ],
    'capitalized-comments': 'warn',
    'comma-dangle'        : [
      'warn',
      'always-multiline',
    ],
    'comma-spacing': [
      'warn',
      {
        'before': false,
        'after' : true,
      },
    ],
    'comma-style': 'warn',
    'complexity' : [
      'warn',
      {
        max: 10,
      },
    ],
    'computed-property-spacing': [
      'warn',
      'never',
    ],
    'consistent-return': 'off',
    'consistent-this'  : [
      'warn',
      'self',
    ],
    'curly'       : 'warn',
    'default-case': 'off',
    'dot-location': [
      'warn',
      'property',
    ],
    'dot-notation': 'warn',
    'eol-last'    : 'warn',
    'eqeqeq'      : [
      'warn',
      'smart',
    ],
    'for-direction'    : 'warn',
    'func-call-spacing': [
      'warn',
      'never',
    ],
    'func-name-matching': 'off',
    'func-names'        : 'off',
    'func-style'        : [
      'warn',
      'declaration',
      {
        'allowArrowFunctions': true,
      },
    ],
    'function-paren-newline': [
      'warn',
      'consistent',
    ],
    'getter-return'      : 'off',
    'global-require'     : 'off',
    'guard-for-in'       : 'off',
    'handle-callback-err': 'off',
    'id-blacklist'       : 'off',
    'id-length'          : [
      'warn',
      {
        'exceptions': [
          '$',
          '_',
          'i',
          'e',
          'a',
          'b',
          'x',
          'y',
          'z',
        ],
      },
    ],
    'id-match'                : 'off',
    'implicit-arrow-linebreak': [
      'warn',
      'beside',
    ],
    'indent': [
      'warn',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'indent-legacy'    : 'off',
    'init-declarations': 'off',
    'jsx-quotes'       : 'off',
    'key-spacing'      : 'warn',
    'keyword-spacing'  : [
      'warn',
      {
        'before': true,
        'after' : true,
      },
    ],
    'line-comment-position': [
      'warn',
      {
        'position': 'above',
      },
    ],
    'linebreak-style': [
      'warn',
      'unix',
    ],
    'lines-around-comment': [
      'warn',
      {
        'afterBlockComment' : false,
        'afterLineComment'  : false,
        'allowArrayEnd'     : false,
        'allowArrayStart'   : true,
        'allowBlockEnd'     : false,
        'allowBlockStart'   : true,
        'allowClassEnd'     : false,
        'allowClassStart'   : true,
        'allowObjectEnd'    : false,
        'allowObjectStart'  : true,
        'beforeBlockComment': true,
        'beforeLineComment' : true,
      },
    ],
    'lines-between-class-members': [
      'warn',
      'always',
    ],
    'lines-around-directive': 'warn',
    'max-depth'             : [
      'warn',
      {
        'max': 3,
      },
    ],
    'max-len': [
      'warn',
      120,
    ],
    'max-lines'             : 'off',
    'max-lines-per-function': [
      'warn',
      {
        max         : 50,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': [
      'warn',
      {
        max: 3,
      },
    ],
    'max-params': [
      'warn',
      4,
    ],
    'max-statements'         : 'off',
    'max-statements-per-line': 'warn',
    'multiline-comment-style': 'off',
    'multiline-ternary'      : [
      'warn',
      'always-multiline',
    ],
    'new-parens'              : 'warn',
    'newline-before-return'   : 'warn',
    'newline-per-chained-call': [
      'warn',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'no-alert'                : 'warn',
    'no-array-constructor'    : 'warn',
    'no-bitwise'              : 'warn',
    'no-buffer-constructor'   : 'warn',
    'no-caller'               : 'warn',
    'no-case-declarations'    : 'warn',
    'no-compare-neg-zero'     : 'warn',
    'no-cond-assign'          : 'warn',
    'no-console'              : 'warn',
    'no-constant-condition'   : 'warn',
    'no-continue'             : 'off',
    'no-control-regex'        : 'off',
    'no-debugger'             : 'error',
    'no-delete-var'           : 'warn',
    'no-div-regex'            : 'off',
    'no-dupe-args'            : 'warn',
    'no-dupe-keys'            : 'warn',
    'no-duplicate-case'       : 'warn',
    'no-empty'                : 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-function'       : 'warn',
    'no-empty-pattern'        : 'warn',
    'no-eq-null'              : 'warn',
    'no-eval'                 : 'warn',
    'no-ex-assign'            : 'warn',
    'no-extend-native'        : 'warn',
    'no-extra-bind'           : 'warn',
    'no-extra-boolean-cast'   : 'warn',
    'no-extra-label'          : 'warn',
    'no-extra-parens'         : 'warn',
    'no-extra-semi'           : 'warn',
    'no-fallthrough'          : 'warn',
    'no-floating-decimal'     : 'warn',
    'no-func-assign'          : 'warn',
    'no-global-assign'        : 'warn',
    'no-implicit-coercion'    : [
      'warn',
      {
        boolean: false,
      },
    ],
    'no-implicit-globals'    : 'warn',
    'no-implied-eval'        : 'warn',
    'no-inline-comments'     : 'warn',
    'no-inner-declarations'  : 'off',
    'no-invalid-regexp'      : 'warn',
    'no-irregular-whitespace': 'warn',
    'no-iterator'            : 'warn',
    'no-label-var'           : 'warn',
    'no-labels'              : 'off',
    'no-lone-blocks'         : 'off',
    'no-lonely-if'           : 'warn',
    'no-loop-func'           : 'off',
    'no-magic-numbers'       : [
      'warn',
      {
        'ignore': [
          -1,
          0,
          1,
          100,
        ],
        'detectObjects': true,
      },
    ],
    'no-misleading-character-class': 'off',
    'no-mixed-operators'           : 'warn',
    'no-mixed-requires'            : 'off',
    'no-mixed-spaces-and-tabs'     : 'warn',
    'no-multi-assign'              : 'warn',
    'no-multi-spaces'              : 'warn',
    'no-multi-str'                 : 'off',
    'no-multiple-empty-lines'      : [
      'warn',
      {
        'max'   : 1,
        'maxBOF': 0,
        'maxEOF': 0,
      },
    ],
    'no-native-reassign'         : 'off',
    'no-negated-condition'       : 'warn',
    'no-negated-in-lhs'          : 'off',
    'no-nested-ternary'          : 'warn',
    'no-new'                     : 'off',
    'no-new-func'                : 'off',
    'no-new-object'              : 'warn',
    'no-new-require'             : 'off',
    'no-new-wrappers'            : 'off',
    'no-obj-calls'               : 'off',
    'no-octal'                   : 'off',
    'no-octal-escape'            : 'off',
    'no-param-reassign'          : 'off',
    'no-path-concat'             : 'off',
    'no-plusplus'                : 'off',
    'no-process-env'             : 'off',
    'no-process-exit'            : 'off',
    'no-proto'                   : 'off',
    'no-prototype-builtins'      : 'off',
    'no-redeclare'               : 'off',
    'no-regex-spaces'            : 'warn',
    'no-restricted-globals'      : 'warn',
    'no-restricted-modules'      : 'warn',
    'no-restricted-properties'   : 'warn',
    'no-restricted-syntax'       : 'warn',
    'no-return-assign'           : 'warn',
    'no-script-url'              : 'off',
    'no-self-assign'             : 'off',
    'no-self-compare'            : 'off',
    'no-sequences'               : 'warn',
    'no-shadow'                  : 'off',
    'no-shadow-restricted-names' : 'off',
    'no-spaced-func'             : 'off',
    'no-sparse-arrays'           : 'off',
    'no-sync'                    : 'off',
    'no-tabs'                    : 'warn',
    'no-template-curly-in-string': 'warn',
    'no-ternary'                 : 'off',
    'no-throw-literal'           : 'off',
    'no-trailing-spaces'         : 'warn',
    'no-undef'                   : 'warn',
    'no-undef-init'              : 'off',
    'no-undefined'               : 'off',
    'no-underscore-dangle'       : [
      'warn',
      {
        'allowAfterThis': true,
      },
    ],
    'no-unexpected-multiline'     : 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unneeded-ternary'         : 'warn',
    'no-unreachable'              : 'warn',
    'no-unsafe-finally'           : 'off',
    'no-unsafe-negation'          : 'off',
    'no-unused-labels'            : 'warn',
    'no-unused-vars'              : [
      'warn',
      {
        'ignoreRestSiblings': true,
      },
    ],
    'no-use-before-define'            : 'off',
    'no-useless-call'                 : 'warn',
    'no-useless-catch'                : 'warn',
    'no-useless-concat'               : 'warn',
    'no-useless-escape'               : 'warn',
    'no-useless-return'               : 'warn',
    'no-void'                         : 'warn',
    'no-warning-comments'             : 'off',
    'no-whitespace-before-property'   : 'warn',
    'no-with'                         : 'warn',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline'            : [
      'warn',
      {
        'ObjectExpression': {
          'consistent': true,
        },
        'ObjectPattern': {
          'consistent': true,
        },
        'ImportDeclaration': {
          'consistent': true,
        },
        ExportDeclaration: 'never',
      },
    ],
    'object-property-newline': [
      'warn',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'one-var': [
      'warn',
      'never',
    ],
    'one-var-declaration-per-line': [
      'warn',
      'always',
    ],
    'operator-assignment': 'warn',
    'operator-linebreak' : [
      'warn',
      'before',
    ],
    'padded-blocks': [
      'warn',
      {
        blocks  : 'never',
        switches: 'never',
        classes : 'never',
      },
    ],
    'padding-line-between-statements': [
      'error',
      /* eslint-disable object-property-newline,object-curly-newline */
      {blankLine: 'always', prev: '*', next: 'cjs-export'},
      {blankLine: 'always', prev: 'cjs-import', next: '*'},
      {blankLine: 'always', prev: 'export', next: '*'},
      {blankLine: 'always', prev: 'import', next: '*'},
      {blankLine: 'any', prev: 'cjs-export', next: 'cjs-export'},
      {blankLine: 'never', prev: 'cjs-import', next: 'cjs-import'},
      {blankLine: 'any', prev: 'export', next: 'export'},
      {blankLine: 'never', prev: 'import', next: 'import'},
      /* eslint-enable object-property-newline,object-curly-newline */
    ],
    'prefer-named-capture-group'  : 'off',
    'prefer-object-spread'        : 'warn',
    'prefer-promise-reject-errors': 'off',
    'prefer-reflect'              : 'off',
    'quote-props'                 : [
      'warn',
      'as-needed',
    ],
    'radix'                 : 'off',
    'require-atomic-updates': 'off',
    'require-unicode-regexp': 'off',
    'semi-spacing'          : 'warn',
    'semi-style'            : [
      'warn',
      'last',
    ],
    'sort-keys'          : 'off',
    'sort-vars'          : 'off',
    'space-before-blocks': [
      'warn',
      'always',
    ],
    'space-before-function-paren': [
      'warn',
      'never',
    ],
    'space-in-parens': [
      'warn',
      'never',
    ],
    'space-infix-ops': 'warn',
    'space-unary-ops': [
      'warn',
      {
        'words'   : true,
        'nonwords': false,
      },
    ],
    'spaced-comment': [
      'warn',
      'always',
      {
        block: {
          balanced: true,
        },
      },
    ],
    'strict'              : 'off',
    'switch-colon-spacing': 'warn',
    'template-tag-spacing': 'off',
    'unicode-bom'         : 'off',
    'use-isnan'           : 'off',
    'vars-on-top'         : 'warn',
    'wrap-iife'           : 'off',
    'wrap-regex'          : 'warn',
    'yoda'                : [
      'warn',
      'never',
    ],

    // These will be overridden with babel/ equivalents if plugin-babel.js is included.
    'new-cap': [
      'warn',
    ],
    'no-unused-expressions': 'warn',
    'object-curly-spacing' : [
      'warn',
      'never',
    ],
    'quotes': [
      'warn',
      'single',
    ],
    'semi': [
      'warn',
      'always',
    ],
  },
};
