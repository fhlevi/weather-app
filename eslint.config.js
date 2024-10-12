import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'prettier'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettier],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            minProperties: 6,
            multiline: true,
            consistent: true,
          },
          ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
          ImportDeclaration: 'never',
          ExportDeclaration: {
            minProperties: 6,
            multiline: true,
            consistent: true,
          },
        },
      ],
      'arrow-body-style': [
        'warn',
        'as-needed',
        {
          requireReturnForObjectLiteral: false,
        },
      ],
      'max-len': [
        'error',
        {
          code: 100,
          tabWidth: 2,
          comments: 120,
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'react/prop-types': 'warn',
      'react/forbid-prop-types': 'off',
      'react/require-default-props': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'import/prefer-default-export': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/no-static-element-interactions': [
        'error',
        {
          handlers: [
            'onClick',
            'onMouseDown',
            'onMouseUp',
            'onKeyPress',
            'onKeyDown',
            'onKeyUp',
          ],
        },
      ],
    },
  },
)
