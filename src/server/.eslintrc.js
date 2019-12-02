const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../', '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier'],
  plugins: ['prettier'],
  env: {
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off',
  },
};
