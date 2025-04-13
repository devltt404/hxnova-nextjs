import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import typescriptEslintParser from '@typescript-eslint/parser';
import typeScriptPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';

const reactConfig = {
  ...reactRecommended,
  settings: {
    react: {
      version: 'detect',
      runtime: 'automatic',
    },
  },
};

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactConfig,
  prettierRecommended,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    ignores: [
      '**/**/.next',
      '**/**/coverage',
      '**/**/public',
      '**/**/node_modules',
      '**/**/coverage',
      '**/**/pipelines',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
      'eslint.config.mjs',
      'next.config.mjs',
      '**/**/src/tests/*',
      '**/**/src/augment.d.ts',
    ],
  },
  {
    files: ['**/**.{ts,tsx,js,mjs,jsx}'],
    plugins: { typeScriptPlugin, reactPlugin, 'react-refresh': reactRefresh },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/no-unknown-property': ['error', { ignore: ['sx'] }],
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
];
