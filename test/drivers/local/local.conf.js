const path = require('path');
const settingsPath = path.join(process.cwd(), 'test-settings.js');
const { DATA } = require(settingsPath);

const allure = require('allure-commandline');


exports.config = {
    hostname: DATA.LOCAL.hostname,
    port: DATA.LOCAL.port,
    path: DATA.LOCAL.path,
    protocol:  DATA.LOCAL.protocol,
    specs: [
        `./test/features/${DATA.TEST_SETTINGS.platform}.feature`
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: DATA.TEST_SETTINGS.platform === "android" ? "Android" : "iOS",
        ...(DATA.TEST_SETTINGS.platform === "android" ? {
            "appium:appPackage": DATA.APP.android,
            "appium:appActivity":DATA.ACTIVITY.android
          } : {
            "appium:bundleId": DATA.APP.ios,
            "appium:deviceName": DATA.DEVICE.ios
          }),
        "appium:automationName":  DATA.TEST_SETTINGS.platform === "android" ? DATA.AUTOMATION_NAME.android : DATA.AUTOMATION_NAME.ios,
        "appium:ignoreHiddenApiPolicyError": true
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    framework: 'cucumber',
    cucumberOpts: {
        tagExpression: DATA.TEST_SETTINGS.tags,
        backtrace: true,
        requireModule: [],
        failAmbiguousDefinitions: false,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        profile: [],
        require: [
            './test/stepDefinitions/**/*.js'
        ],
        snippetSyntax: undefined,
        snippets: true,
        source: true,
        strict: false,
        tagsInTitle: false,
        timeout: 20000,
        retry: 0
    },
    reporters: [
        [
          'allure',
          {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
          }
        ]
      ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
        //    await browser.takeScreenshot();
            await Helper.closeApp();
            driver.deleteSession();   
        }
    },
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                15000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}
