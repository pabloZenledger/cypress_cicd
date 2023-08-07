const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "v9m1ro",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
