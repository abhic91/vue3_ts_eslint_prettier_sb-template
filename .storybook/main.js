const quasar =  require('@quasar/vite-plugin').quasar;

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config, { configType }) {
        config.plugins = [...config.plugins, quasar({
      sassVariables: '../src/assets/scss/quasar-variables.sass'
    })]
        return config;
    },
}