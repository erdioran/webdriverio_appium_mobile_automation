class iosLocators {
    constructor() {
      this.SPLASH_SCREEN_BASLA_BUTTON_IOS = '//XCUIElementTypeButton[@name="Başla"]';
      this.SPLASH_SCREEN_ATLA_BUTTON_IOS = '**/XCUIElementTypeButton[`label == "Atla"`]';
    }
  }
  
  module.exports = new iosLocators();