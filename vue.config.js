const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    before: app => {
      // app就是一个express
      app.get('/mock/test3', function(req, res) {
        res.json([{ title: '测试3', content: '测试', createdTime: '2021-09-21' }])
      })
    }
  }
}
