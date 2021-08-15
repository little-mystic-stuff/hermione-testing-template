const should = require('chai').should();

describe('Redirects.', async () => {
  it('Default', async function () {
    await this.browser.openPage();
    const title = await this.browser.$('#readme h2').getText();
    title.should.equal('Hermione testing template');
  });
});
