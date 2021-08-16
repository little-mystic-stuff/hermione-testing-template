module.exports = async function (urlComponent) {
  console.log(this.options.baseUrl);
  const url = urlComponent === undefined ? this.options.baseUrl : urlComponent;
  await this.url(url);
};
