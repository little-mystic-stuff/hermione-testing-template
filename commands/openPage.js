module.exports = async function (urlComponent) {
  const url = urlComponent === undefined ? this.options.baseUrl : urlComponent;
  await this.url(url);
};
