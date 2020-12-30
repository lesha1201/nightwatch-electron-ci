module.exports = {
  "Demo test": function (browser) {
    browser.waitForElementVisible("body").assert.titleContains("Google").end();
  },
};
