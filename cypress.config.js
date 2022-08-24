const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}


module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    supportFile: false,
    baseUrl: 'http://localhost:6061',
    specPattern: ["**/*.feature"]
  }
});


// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     // baseUrl: 'https://b899-13-67-75-93.ngrok.io',
//       baseUrl: 'http://localhost:6061/',
   
//   },
//   reporter: 'mochawesome',
//   reportOptions:{
//     reportDir:'cypress/results',
//     overwrite:false,
//     html: true,
//     json: true
//   }
// });
