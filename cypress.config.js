const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      console.log(config)
      config.baseUrl= 'https://serverest.dev',
      pageLoadTimeout = 50000
      return config
    }
  }
});
