const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // on("file:preprocessor",
      // createBundler({
      //   plugins: [createEsbuildPlugin.default(config)],
      // }));
      // preprocessor.addCucumberPreprocessorPlugin(on, config);
      // return config;
    },
  
  env:{
    videoCompression: false, 
    viewportWidth: 1280, 
    viewportHeight: 720, 
    defaultCommandTimeout:120000, 
    requestTimeout : 30000, 
    numTestsKeptInMemory: 0, 
    responseTimeout : 50000, 
    pageLoadTimeout: 120000,
    }
  },
})