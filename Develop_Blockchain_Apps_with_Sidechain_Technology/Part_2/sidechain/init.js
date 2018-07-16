module.exports = async function () {
  app.logger.info('enter dapp init')

  // register createArticle smart contract
  app.registerContract(1000, 'article.createArticle')
  // set fee for createArticle to 1 XAS
  app.registerFee(1000, '100000000', 'XAS')
}

