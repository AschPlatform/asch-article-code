module.exports = {
  createArticle: async function (title, text) {
    if (!title) {
      return 'no_title: Should provide title1'
    }
    if (!text) {
      return 'no_text: Should provide text'
    }
    if (title.length > 256) {
      return 'title_too_long: Title should not be longer then 256 characters'
    }
    if (text.length > 4096) {
      return 'text_too_long: Text should not be longer then 4096 characters'
    }

    let exists = await app.model.Article.exists({ title: title })
    if (exists) {
      return `title_already_in_use: Title "${title}" already in use`
    }

    app.sdb.create('Article', {
      id: app.autoID.increment('article_max_id'),
      tid: this.trs.id,
      authorId: this.trs.senderId,
      title: title,
      text: text,
      votes: 0,
      timestamp: this.trs.timestamp
    })
  }
}
