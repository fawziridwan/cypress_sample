const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = ({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
    // baseUrl: "https://www.themoviedb.org",
    // baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    // setupNodeEvents(on, config) {
    //   on('file:preprocessor', cucumber())
    //   return config;
    // },
    // specPattern: "**/*.feature",
    // env: {
    //   videoCompression: false,
    //   viewportWidth: 1280,
    //   viewportHeight: 720,
    //   defaultCommandTimeout: 120000,
    //   requestTimeout: 30000,
    //   numTestsKeptInMemory: 0,
    //   responseTimeout: 60000,
      pageLoadTimeout: 70000,
    // }
  }
});