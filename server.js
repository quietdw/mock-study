// 安装express
const express = require('express')
const app = express()

// 设置允许跨域访问该服务.
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/mock/test2', function(req, res) {
  res.json([{ title: '测试2', content: '测试', createdTime: '2021-09-21' }])
})

const server = app.listen(9082, function() {
  console.log('Express app server listening on port %d', server.address().port)
})
