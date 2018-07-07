app.route.get('/articles', async (req) => {

  // load all articles
  let articles = await app.model.Article.findAll({
    limit: 50,
    offset: 0,
    sort: { timestamp: -1 }
  })
  return articles
})
