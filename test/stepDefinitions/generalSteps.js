const { Given, When, Then } = require("@cucumber/cucumber");
const Helper = require("../methods/helper.js");
const androidLocators = require("../locators/androidLocators.js");
const iosLocators = require("../locators/iosLocators.js");
const getElementByString = require("../methods/returnElement.js");

const path = require("path");
const { assert, log } = require("console");
const { Assertion } = require("chai");
const { expect } = require("chai");
const settingsPath = path.join(process.cwd(), "test-settings.js");
const { DATA } = require(settingsPath);

Given(/^restart the app$/, () => {
  return Helper.reopenAppIfOpen();
});

Given(/^click "(.*)"/, async (elementString) => {
  const element = getElementByString(elementString);
  await element.click();
});

Given(/^try click "(.*)"/, async (elementString) => {
  const element = getElementByString(elementString);
  const isVisible = await Helper.isElementVisible(element);
  if (isVisible) {
    await element.click();
  }
});

Given(/^wait (.*) second$/, async (second) => {
  return Helper.waitSecond(second);
});

Given(/^open app$/, () => {
  return Helper.openApp();
});

Given(/^close app$/, () => {
  return Helper.closeApp();
});

Given(/^i see "(.*)" text$/, async (text) => {
  expect(await Helper.findTextOnPage(text)).to.be.true;
});

Given(/^i see "(.*)" element$/, async (elementString) => {
  const element = getElementByString(elementString);
  expect(await Helper.isElementVisible(element)).to.be.true;
});

Given(/^i cant see "(.*)" element$/, async (elementString) => {
  const element = getElementByString(elementString);
  expect(await Helper.isElementVisible(element)).to.be.false;
});

Given(/^i cant see "(.*)" text$/, async (text) => {
  expect(await Helper.findTextOnPage(text)).to.be.false;
});

Given(/^swipe right$/, async () => {
  await Helper.swipeScreen("right");
});

Given(/^swipe left$/, async () => {
  await Helper.swipeScreen("left");
});

Given(/^tap "(.*)"/, async (elementString) => {
  const element = await browser.getElementByString(elementString);
  await element.touchAction([
    { action: "press", x: 10, y: 10 },
    { action: "release" },
  ]);
});

// Aşağıdaki methodlar güncellenecek

Given(/^app goes to background$/, async () => {
  if (DATA.TEST_SETTINGS.platform === "android") {
    await browser.background(-1);
  } else if (DATA.TEST_SETTINGS.platform === "ios") {
    await driver.execute("mobile: pressButton", { name: "home" });
  }
});

Given(/^app goes to foreground$/, async () => {
  await browser.activateApp(
    DATA.TEST_SETTINGS.platform === "android" ? DATA.APP.android : DATA.APP.ios
  );
});

Given(/^kill app$/, async () => {
  await browser.terminateApp(
    DATA.TEST_SETTINGS.platform === "android" ? DATA.APP.android : DATA.APP.ios
  );
});

Given(/^allow location permission$/, async () => {
  if (DATA.TEST_SETTINGS.platform === "android") {
    await browser.execute("mobile:shell", {
      command:
        "pm grant " +
        DATA.APP.android +
        " android.permission.ACCESS_FINE_LOCATION",
    });
  } else if (DATA.TEST_SETTINGS.platform === "ios") {
    await browser.execute("mobile:alert", { action: "accept" });
  }
});
