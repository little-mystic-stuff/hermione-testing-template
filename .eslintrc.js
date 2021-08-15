module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'func-names': 'off'
  },
  overrides: [
    {
      files: ['./tests/desktop/*'],
      rules: {
        'no-unused-vars': 'off'
      }
    }
  ]
};
