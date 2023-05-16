const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gtp1i9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    baseUrl : 'https://todomvc-app-for-testing.surge.sh/',
    retries: {
      runMode : 2,
      openMode : 1
    }
  },
});
