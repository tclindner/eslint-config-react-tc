const a11y = require.resolve('./rules/a11y');
const react = require.resolve('./rules/react');
const prettier = require.resolve('./rules/prettier');

module.exports = {
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended', a11y, react, prettier],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y'],
  env: {
    es6: true,
  },
  rules: {
    'class-methods-use-this': [
      'error',
      {
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
          'getSnapshotBeforeUpdate',
        ],
      },
    ],
  },
  settings: {
    propWrapperFunctions: ['forbidExtraProps'],
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.test.js', '**/tests-*.js'],
      env: {
        jest: true,
        mocha: true,
      },
      rules: {
        'react/jsx-closing-tag-location': 'off',
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'import/extension': 'off',
      },
    },
  ],
};
