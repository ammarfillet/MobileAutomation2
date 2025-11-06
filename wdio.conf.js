const { join } = require("path");

exports.config = {
  runner: "local",

  specs: ["./test/specs/**/*.js"],

  exclude: [],

  maxInstances: 1,

  capabilities: [{
  platformName: "Android",
  "appium:deviceName": "Android Emulator",
  "appium:automationName": "UiAutomator2",
  "appium:udid": "emulator-5554", // ganti sesuai hasil adb devices kamu
  "appium:noReset": true,
  "appium:fullReset": false,
  "appium:appPackage": "com.google.android.apps.nexuslauncher", // launcher = home screen
  "appium:appActivity": "com.google.android.apps.nexuslauncher.NexusLauncherActivity",
}],


  logLevel: "info",

  bail: 0,

  baseUrl: "http://127.0.0.1:4723/wd/hub",

  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: [
    [
      "appium",
      {
        args: {
          address: "127.0.0.1",
          port: 4723,
        },
        command: "appium",
      },
    ],
  ],

  framework: "mocha",

  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  before: function (capabilities, specs) {
    // Tambahkan hook jika mau menjalankan sesuatu sebelum test
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed }
  ) {
    if (!passed) {
      await driver.takeScreenshot(); // otomatis screenshot jika test gagal
    }
  },
};
