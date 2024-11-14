import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,ts}'],
    languageOptions: { globals: globals.browser },
  },
  stylistic.configs.customize({
    semi: false,
  }),
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/function-call-spacing': 'error',
      '@stylistic/brace-style': [
        'error',
        '1tbs',
        { allowSingleLine: true },
      ],
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/object-curly-newline': [
        'error',
        {
          multiline: true,
          consistent: true,
          minProperties: 5,
        },
      ],
      '@stylistic/array-element-newline': [
        'error',
        {
          ArrayExpression: 'consistent',
          ArrayPattern: { minItems: 3 },
        },
      ],
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
    },
  },
]
