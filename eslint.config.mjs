import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.ts', '**/*.vue'],
  ignores: ['.nuxt', 'node_modules', 'dist', 'build', 'public', 'i18n'],
  rules: {
    'no-console': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-case-declarations': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'vue/no-v-html': 'off',
  },
});
