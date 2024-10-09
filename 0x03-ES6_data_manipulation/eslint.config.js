import { FlatCompat } from '@eslint/eslintrc';
import airbnbBase from 'eslint-config-airbnb-base';
import jestPlugin from 'eslint-plugin-jest';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use FlatCompat to convert .eslintrc style config to new format
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default [
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 2018,
    },
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
  },
  ...compat.config({
    extends: ['airbnb-base', 'plugin:jest/all'],
    plugins: ['jest'],
  }),
];
