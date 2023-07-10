const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = ({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
    chromeWebSecurity: false,
    pageLoadTimeout: 70000,
  }
});