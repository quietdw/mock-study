import Mock from 'mockjs'

const Random = Mock.Random
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
const produceNewsData = function() {
  let newsList = []
  for (let i = 0; i < 20; i++) {
    let newNewsObject = {
      title: Random.ctitle(),
      content: Random.cparagraph(),
      createdTime: Random.date()
    }
    newsList.push(newNewsObject)
  }

  return newsList
}

// 请求该url，就可以返回newsList
Mock.mock('/mock/test1', produceNewsData)
// 设置全局延时
Mock.setup({
  timeout: '200-400'
})
