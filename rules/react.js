module.exports = {
  rules: {
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false
      }
    ],
    'react/default-props-match-prop-types': ['error', {allowRequiredDefaults: false}],
    'react/destructuring-assignment': ['error', 'always'],
    'react/display-name': 'off',
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true
      }
    ],
    'react/jsx-boolean-value': ['error', 'never', {always: []}],
    'react/jsx-curly-brace-presence': ['error', {props: 'never', children: 'never'}],
    'react/jsx-filename-extension': ['error', {extensions: ['.jsx']}],
    'react/jsx-handler-names': 'error',
    'react/jsx-pascal-case': 'error',
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
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true
      }
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false
      }
    ],
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: true
      }
    ],
    'react/style-prop-object': 'error',
    'react/sort-comp': [
      'error',
      {
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
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],
    'react/void-dom-elements-no-children': 'error'
  }
};
