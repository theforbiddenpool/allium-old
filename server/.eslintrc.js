module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': ['warn', { allow: ['error', 'log'] }],
    'no-unused-vars': ['error', {
      vars: 'all', args: 'after-used', argsIgnorePattern: '^_', ignoreRestSiblings: false,
    }],
  },
};
