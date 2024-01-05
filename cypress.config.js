const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        // deconstruct the individual properties
        hello({ greeting, name }) {
          console.log('%s, %s', greeting, name)

          return null
        },
      })
    },
  },
})