const should = require('chai').should();

describe('Github.', async () => {
  it('Project title in readme', async function () {
    await this.browser.openPage();
    const title = await this.browser.$('#readme .markdown-body h2').getText();
    title.should.equal('Hermione testing template');
  });
});
