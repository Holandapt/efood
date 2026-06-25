import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, reacthooks: reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules
    },
    extends: ['js/recommended', 'react-app'],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  reactHooks.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended
])
