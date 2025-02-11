// eslint.config.js
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  js.configs.recommended,

  {
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': reactHooks,
      prettier,
      import: importPlugin,
      'unused-imports': unusedImports,
      // '@next/next': nextPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    rules: {
      // JavaScript Rules
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-unused-vars': 'warn',
      'object-shorthand': 'warn',
      'quote-props': ['warn', 'as-needed'],

      // TypeScript Rules
      '@typescript-eslint/array-type': ['warn', { default: 'array' }],
      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'no-type-imports', // Removes 'import type' keyword
          disallowTypeAnnotations: false,
        },
      ],

      // React Rules
      'react/jsx-fragments': ['warn', 'syntax'],
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': 'warn',

      // Import Order (Dependency-Based Hierarchy)
      'import/order': [
        'warn',
        {
          groups: [
            [
              'builtin', // Node.js built-in modules
              'external', // npm packages (react, next, axios, etc.)
            ],
            'internal', // Aliased imports (e.g., @/components, @/utils)
            'type', // Type imports (import type {...} from 'module')
            'parent',
            'sibling', // Relative imports (../, ./)
            'object',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before', // Ensures React is always at the top of external imports
            },
            {
              pattern: 'next',
              group: 'external',
              position: 'before', // Ensures Next.js imports are right after React
            },
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/utils/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './*.module.css', // Matches CSS Modules
              group: 'sibling', // Keep styles in the sibling group
              position: 'after', // Place at the end of sibling imports
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'unused-imports/no-unused-imports': 'error',
      'import/newline-after-import': ['warn', { count: 1 }],
    },
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.next/',
      'coverage/',
      '**/*.min.js',
      '**/vendor/**',
      '.cache',
      'package-lock.json',
      'public',
      'next-env.d.ts',
      'next.config.ts',
      'yarn.lock',
    ],
  },
];
