module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'functional', 'deprecation'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
  ],
  rules: {
    'no-shadow': 0,
    'no-delete-var': ['error'],
    'functional/immutable-data': [
      'error',
      {
        ignorePattern: '^(history|window\\..*|piwik)$',
      },
    ],
    'functional/no-let': 'error',
    'import/no-deprecated': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-useless-escape': 0,
    '@typescript-eslint/camelcase': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'deprecation/deprecation': 'warn',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
}
