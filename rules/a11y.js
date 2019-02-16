module.exports = {
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25
      }
    ],
    'jsx-a11y/tabindex-no-positive': 'error',
    'jsx-a11y/lang': 'error',
    'jsx-a11y/no-onchange': 'off'
  }
};
