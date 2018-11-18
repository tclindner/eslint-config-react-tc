/* eslint object-curly-newline: 'off', no-magic-numbers: 'off', array-bracket-newline: 'off' */

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  env: {
    es6: true
  },
  rules: {
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'getSnapshotBeforeUpdate'
      ]
    }],
    'jsx-a11y/label-has-associated-control': ['error', {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'both',
      depth: 25
    }],
    'jsx-a11y/tabindex-no-positive': 'error',
    'jsx-a11y/lang': 'error',
    'jsx-a11y/no-onchange': 'off',
    'react/button-has-type': ['error', {
      button: true,
      submit: true,
      reset: false
    }],
    'react/default-props-match-prop-types': ['error', {allowRequiredDefaults: false}],
    'react/destructuring-assignment': ['error', 'always'],
    'react/display-name': 'off',
    'react/forbid-prop-types': ['error', {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true
    }],
    'react/jsx-boolean-value': ['error', 'never', {always: []}],
    'react/jsx-closing-bracket-location': ['error', {selfClosing: 'after-props', nonEmpty: 'after-props'}],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', {props: 'never', children: 'never'}],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {extensions: ['.jsx']}],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline'
    }],
    'react/jsx-one-expression-per-line': ['error', {allow: 'single-child'}],
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line'
    }],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'warn',
    'react/no-did-update-set-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/no-multi-comp': ['error', {ignoreStateless: true}],
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],
    'react/require-default-props': ['error', {
      forbidDefaultForRequired: true
    }],
    'react/self-closing-comp': ['error', {
      component: true,
      html: false
    }],
    'react/sort-prop-types': ['error', {
      callbacksLast: true,
      ignoreCase: true,
      requiredFirst: true
    }],
    'react/style-prop-object': 'error',
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ],
        rendering: [
          '/^render.+$/',
          'render'
        ]
      }
    }],
    'react/void-dom-elements-no-children': 'error'
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.0'
    },
    propWrapperFunctions: ['forbidExtraProps']
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.test.js',
        '**/tests-*.js'
      ],
      env: {
        jest: true,
        mocha: true
      }
    }
  ]
};
