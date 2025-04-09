const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    //######### Environment Credentials ##########//
    username: "test@maddox123.ai",
    password: "supersecure",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Required for mochawesome reporter to work
      require("cypress-mochawesome-reporter/plugin")(on);
      return config; 
    },

    //######## Environment URL ##########//
    baseUrl: "http://localhost:3000/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    screenshotOnRunFailure: false,
    pageLoadTimeout: 100000,
    viewportHeight: 1080,
    viewportWidth: 1920,

    //######## Screenshot and Video Configuration ##########//
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos/testExecutionVideos",

    //######## Report Configuration ##########//
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      configFile: "reporter-config.json",
      inlineAssets: true,
      toConsole: true,
    },

    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
