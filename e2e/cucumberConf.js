//protractor.conf.js
exports.config = {
    directConnect : true,
    // getPageTimeout: 60000,
    // allScriptsTimeout: 60000,
    framework: 'custom', // set to "custom" instead of cucumber.
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    allScriptsTimeout: 10000,
    specs: ["./e2e/**/*.e2e-spec.ts"],
    capabilities: {
      browserName: "chrome",
      chromeOptions: {
        binary: process.env.CHROME_BIN,
        args: ['--no-sandbox']
      }
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      // 'features/*.feature',
      // 'features/testInBrowser.feature',
      'features/stuRegis.feature',
    ],
  
    cucumberOpts: {
      require: 'steps/stepDefination.js',
      tags: false,
      // format: ['pretty'],
      profile: false,
      'no-source': true
    },
    onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
      browser.ignoreSynchronisation = true
      global.protractor = protractor;
      global.myVariable = "test";
    }
  };