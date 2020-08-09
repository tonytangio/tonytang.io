module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',

  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    curly: ['error', 'multi-or-nest'],
    eqeqeq: 'error',
    indent: ['error', 2, { SwitchCase: 2 }],
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 }
      }
    ],
    'operator-linebreak': ['error', 'before'],
    'no-useless-return': 'error',
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: true
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'no-unused-vars': ['off']
      }
    }
  ]
};
