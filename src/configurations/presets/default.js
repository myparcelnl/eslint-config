module.exports = {
  'env': {
    'browser': true,
  },
  'extends': [
    '../plugins/jsdoc.js',
    '../plugins/you-dont-need-momentjs.js',
  ],
  'rules': {
    'accessor-pairs':        'off',
    'array-bracket-newline': [
      'warn',
      'consistent',
    ],
    'array-bracket-spacing': [
      'warn',
      'never',
    ],
    'array-callback-return': 'off',
    'array-element-newline': [
      'warn',
      'consistent',
    ],
    'block-scoped-var': 'off',
    'block-spacing':    'warn',
    'brace-style':      [
      'warn',
      '1tbs',
    ],
    'callback-return':        'off',
    'capitalized-comments':   'off',
    'class-methods-use-this': 'off',
    'comma-dangle':           [
      'warn',
      'always-multiline',
    ],
    'comma-spacing': [
      'warn',
      {
        'before': false, 'after': true,
      },
    ],
    'comma-style': 'warn',
    'complexity':  [
      'warn',
      {
        'max': 10,
      },
    ],
    'computed-property-spacing': [
      'warn',
      'never',
    ],
    'consistent-return': 'off',
    'consistent-this':   'off',
    'curly':             'warn',
    'default-case':      'off',
    'dot-location':      [
      'warn',
      'property',
    ],
    'dot-notation': 'warn',
    'eol-last':     'warn',
    'eqeqeq':       [
      'warn',
      'smart',
    ],
    'for-direction':     'off',
    'func-call-spacing': [
      'warn',
      'never',
    ],
    'func-name-matching': 'off',
    'func-names':         'off',
    'func-style':         [
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
    'getter-return':       'off',
    'global-require':      'off',
    'guard-for-in':        'off',
    'handle-callback-err': 'off',
    'id-blacklist':        'off',
    'id-length':           [
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
    'id-match':                 'off',
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
    'indent-legacy':     'off',
    'init-declarations': 'off',
    'jsx-quotes':        'off',
    'key-spacing':       'warn',
    'keyword-spacing':   [
      'warn',
      {
        'before': true,
        'after':  true,
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
    'lines-around-comment':        'off',
    'lines-around-directive':      'off',
    'lines-between-class-members': [
      'warn',
      'always',
      {
        'exceptAfterSingleLine': true,
      },
    ],
    'max-classes-per-file': 'off',
    'max-depth':            [
      'warn',
      {
        'max': 3,
      },
    ],
    'max-len': [
      'warn',
      120,
    ],
    'max-lines':              'off',
    'max-lines-per-function': [
      'warn',
      {
        'max': 50, 'skipComments': true,
      },
    ],
    'max-nested-callbacks': 'off',
    'max-params':           [
      'warn',
      4,
    ],
    'max-statements':           'off',
    'max-statements-per-line':  'off',
    'multiline-comment-style':  'off',
    'multiline-ternary':        'off',
    'new-parens':               'off',
    'newline-after-var':        'off',
    'newline-before-return':    'off',
    'newline-per-chained-call': 'off',
    'no-alert':                 'off',
    'no-array-constructor':     'warn',
    'no-bitwise':               'off',
    'no-buffer-constructor':    'off',
    'no-caller':                'off',
    'no-case-declarations':     'off',
    'no-catch-shadow':          'off',
    'no-compare-neg-zero':      'warn',
    'no-cond-assign':           'off',
    'no-console':               'warn',
    'no-constant-condition':    'off',
    'no-continue':              'off',
    'no-control-regex':         'off',
    'no-debugger':              'off',
    'no-delete-var':            'off',
    'no-div-regex':             'off',
    'no-dupe-args':             'off',
    'no-dupe-keys':             'off',
    'no-duplicate-case':        'off',
    'no-empty':                 'off',
    'no-empty-character-class': 'off',
    'no-empty-function':        'off',
    'no-empty-pattern':         'off',
    'no-eq-null':               'off',
    'no-eval':                  'off',
    'no-ex-assign':             'off',
    'no-extend-native':         'off',
    'no-extra-bind':            'off',
    'no-extra-boolean-cast':    'off',
    'no-extra-label':           'off',
    'no-extra-parens':          'off',
    'no-extra-semi':            'off',
    'no-fallthrough':           'warn',
    'no-floating-decimal':      'off',
    'no-func-assign':           'off',
    'no-global-assign':         'off',
    'no-implicit-coercion':     'off',
    'no-implicit-globals':      'off',
    'no-implied-eval':          'off',
    'no-inline-comments':       'off',
    'no-inner-declarations':    'off',
    'no-invalid-regexp':        'off',
    'no-irregular-whitespace':  'off',
    'no-iterator':              'off',
    'no-label-var':             'off',
    'no-labels':                'off',
    'no-lone-blocks':           'off',
    'no-lonely-if':             'warn',
    'no-loop-func':             'off',
    'no-magic-numbers':         [
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
    'no-mixed-operators':            'warn',
    'no-mixed-requires':             'off',
    'no-mixed-spaces-and-tabs':      'warn',
    'no-multi-assign':               'warn',
    'no-multi-spaces':               'warn',
    'no-multi-str':                  'off',
    'no-multiple-empty-lines':       [
      'warn',
      {
        'max': 1, 'maxBOF': 0,
      },
    ],
    'no-native-reassign':          'off',
    'no-negated-condition':        'warn',
    'no-negated-in-lhs':           'off',
    'no-nested-ternary':           'warn',
    'no-new':                      'off',
    'no-new-func':                 'off',
    'no-new-object':               'warn',
    'no-new-require':              'off',
    'no-new-wrappers':             'off',
    'no-obj-calls':                'off',
    'no-octal':                    'off',
    'no-octal-escape':             'off',
    'no-param-reassign':           'off',
    'no-path-concat':              'off',
    'no-plusplus':                 'off',
    'no-process-env':              'off',
    'no-process-exit':             'off',
    'no-proto':                    'off',
    'no-prototype-builtins':       'off',
    'no-redeclare':                'off',
    'no-regex-spaces':             'warn',
    'no-restricted-globals':       'off',
    'no-restricted-modules':       'off',
    'no-restricted-properties':    'off',
    'no-restricted-syntax':        'off',
    'no-return-assign':            'warn',
    'no-script-url':               'off',
    'no-self-assign':              'off',
    'no-self-compare':             'off',
    'no-sequences':                'warn',
    'no-shadow':                   'off',
    'no-shadow-restricted-names':  'off',
    'no-spaced-func':              'off',
    'no-sparse-arrays':            'off',
    'no-sync':                     'off',
    'no-tabs':                     'warn',
    'no-template-curly-in-string': 'off',
    'no-ternary':                  'off',
    'no-throw-literal':            'off',
    'no-trailing-spaces':          'warn',
    'no-undef':                    'warn',
    'no-undef-init':               'off',
    'no-undefined':                'off',
    'no-underscore-dangle':        [
      'warn',
      {
        'allowAfterThis': true,
      },
    ],
    'no-unexpected-multiline':      'off',
    'no-unmodified-loop-condition': 'off',
    'no-unneeded-ternary':          'warn',
    'no-unreachable':               'off',
    'no-unsafe-finally':            'off',
    'no-unsafe-negation':           'off',
    'no-unused-labels':             'warn',
    'no-unused-vars':               [
      'warn',
      {
        'ignoreRestSiblings': true,
      },
    ],
    'no-use-before-define':             'off',
    'no-useless-call':                  'warn',
    'no-useless-catch':                 'warn',
    'no-useless-concat':                'warn',
    'no-useless-escape':                'warn',
    'no-useless-return':                'warn',
    'no-void':                          'off',
    'no-warning-comments':              'off',
    'no-whitespace-before-property':    'warn',
    'no-with':                          'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline':             [
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
        'ExportDeclaration': 'never',
      },
    ],
    'object-property-newline': 'off',
    'one-var':                 [
      'warn',
      'never',
    ],
    'one-var-declaration-per-line': [
      'warn',
      'always',
    ],
    'operator-assignment': 'off',
    'operator-linebreak':  'off',
    'padded-blocks':       [
      'warn',
      'never',
    ],
    'padding-line-between-statements': 'off',
    'prefer-named-capture-group':      'off',
    'prefer-object-spread':            'off',
    'prefer-promise-reject-errors':    'off',
    'prefer-reflect':                  'off',
    'quote-props':                     [
      'warn',
      'as-needed',
    ],
    'radix':                  'off',
    'require-atomic-updates': 'off',
    'require-unicode-regexp': 'off',
    'semi-spacing':           'warn',
    'semi-style':             [
      'warn',
      'last',
    ],
    'sort-keys':           'off',
    'sort-vars':           'off',
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
        'words':    true, 'nonwords': false,
      },
    ],
    'spaced-comment': [
      'warn',
      'always',
      {
        'markers': [
          '/',
        ],
      },
    ],
    'strict':               'off',
    'switch-colon-spacing': 'warn',
    'template-tag-spacing': 'off',
    'unicode-bom':          'off',
    'use-isnan':            'off',
    'vars-on-top':          'warn',
    'wrap-iife':            'off',
    'wrap-regex':           'warn',
    'yoda':                 [
      'warn',
      'never',
    ],

    // These will be overridden with babel/ equivalents if plugin-babel.js is included.
    'new-cap': [
      'warn',
    ],
    'no-unused-expressions': 'warn',
    'object-curly-spacing':  [
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
