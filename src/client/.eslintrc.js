const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../', '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'react', 'react-hooks', '@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  env: {
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
