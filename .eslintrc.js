/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended", "plugin:jest/recommended", "prettier", "plugin:storybook/recommended"],
  overrides: [{
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    env: {
      jest: true
    }
  }],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/script-setup-uses-vars': 'error'
  },
  globals: {
    defineProps: "readonly"
  }
};