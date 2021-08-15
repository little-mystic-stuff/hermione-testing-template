const BASE_URL = 'https://github.com/little-mystic-stuff/hermione-testing-template';
const GRID_URL = 'http://localhost:4444/wd/hub';

module.exports = {
  browsers: {
    firefox: {
      baseUrl: BASE_URL,
      gridUrl: GRID_URL,
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  },
  sets: {
    desktop: {
        files: './tests/desktop/',
        browsers: ['firefox']
    }
  },
  prepareBrowser: function(browser) {
    browser.addCommand('openPage', require('./commands/openPage.js'));
  }
};
