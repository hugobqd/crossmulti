// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Allow self-closing tags
  {
    rules: {
      'vue/html-self-closing': 'off',
    },
  },
)
