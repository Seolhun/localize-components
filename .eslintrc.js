module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  extends: ['airbnb-typescript', 'airbnb/hooks', 'plugin:@typescript-eslint/eslint-recommended'],
  plugins: ['@typescript-eslint', 'eslint-plugin', 'jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'mouse-events-have-key-events': 0,
    // React
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
  },
};
