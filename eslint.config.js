import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      // ── Отключаем чисто форматирование (не Prettier) ──────────────────────
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      'vue/html-closing-bracket-spacing': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-indent': 'off',
      'vue/first-attribute-linebreak': 'off',

      // ── Vue: реальное качество кода ───────────────────────────────────────
      'vue/multi-word-component-names': 'off',  // страницы — PageName.vue, это ок
      'vue/no-unused-vars': 'error',
      'vue/no-undef-components': 'error',
      'vue/no-unused-components': 'error',
      'vue/no-template-shadow': 'error',
      'vue/no-v-html': 'warn',                  // XSS-риск если используется
      'vue/require-v-for-key': 'error',
      'vue/no-use-v-if-with-v-for': 'error',
      'vue/eqeqeq': 'error',

      // ── JS: реальное качество кода ────────────────────────────────────────
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-console': ['warn', { allow: ['error'] }],
      'eqeqeq': 'error',
    },
  },
]
