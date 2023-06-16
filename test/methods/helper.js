var assert = require("assert");
const path = require("path");
const settingsPath = path.join(process.cwd(), "test-settings.js");
const { DATA } = require(settingsPath);
const { TouchAction, PointOption } = require("webdriverio");

class Helper {
  async waitSecond(sleepInSeconds) {
    await driver.pause(10000);
  }

  async openApp() {
    await browser.launchApp();
  }

  async closeApp() {
    await browser.closeApp();
  }

  async closeSession() {
    await browser.deleteSession();
  }

  async reopenAppIfOpen() {
    const isAppOpen = await browser.isAppInstalled(
      DATA.TEST_SETTINGS.platform === "android"
        ? DATA.APP.android
        : DATA.APP.ios
    );

    if (isAppOpen) {
      await browser.closeApp();
    }
    await this.openApp();
  }

  async findTextOnPage(text) {
    if (DATA.TEST_SETTINGS.platform === "android") {
      const elements = await $$(`//android.view.View[@content-desc="${text}"]`);
      return elements.length > 0;
    } else if (DATA.TEST_SETTINGS.platform === "ios") {
      const elements = await $$(`~${text}`);
      return elements.length > 0;
    } else {
      console.error("Unidentified system.");
      return false;
    }
  }

  async isElementVisible(element) {
    return element.isDisplayed();
  }

  async swipeScreen(direction) {
    const size = await browser.getWindowSize();
    let startX, startY, endX, endY;

    switch (direction) {
      case "right":
        startX = Math.floor(size.width * 0.9);
        startY = Math.floor(size.height * 0.5);
        endX = Math.floor(size.width * 0.5);
        break;
      case "left":
        startX = Math.floor(size.width * 0.1);
        startY = Math.floor(size.height * 0.5);
        endX = Math.floor(size.width * 0.5);
        break;
      case "up":
        startX = Math.floor(size.width * 0.5);
        startY = Math.floor(size.height * 0.1);
        endY = Math.floor(size.height * 0.5);
        break;
      case "down":
        startX = Math.floor(size.width * 0.5);
        startY = Math.floor(size.height * 0.9);
        endY = Math.floor(size.height * 0.5);
        break;
      default:
        throw new Error(`Invalid direction: ${direction}`);
    }

    await browser.touchPerform([
      {
        action: "longPress",
        options: {
          x: startX,
          y: startY,
        },
      },
      {
        action: "moveTo",
        options: {
          x: endX || startX,
          y: endY || startY,
        },
      },
      {
        action: "release",
      },
    ]);
  }
}




module.exports = new Helper();
