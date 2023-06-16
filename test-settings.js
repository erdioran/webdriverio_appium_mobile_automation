var DATA = {
    TEST_SETTINGS : {
        "platform" :"android",
        "tags": "@test" 
    },
    CLOUD: {
    },
    LOCAL: {
        "hostname": "0.0.0.0",
        "port": 4723,
        "path": "/wd/hub/",
        "protocol": "http"
    },
    APP: {
        "android": "io.threepounds.qpoint",
        "ios": "com.meta.qchargetest",
    },
    ACTIVITY: {
        "android" : ".MainActivity",
        "ios" : ".MainActivity",
    },
    AUTOMATION_NAME: {
        "android" : "UiAutomator2",
        "ios" : "XCUITest",
    },
    DEVICE: {
        "android" : "",
        "ios" : "iPhone 14",
    }
};
exports.DATA = DATA;
