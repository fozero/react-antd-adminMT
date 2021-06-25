var express = require('express')
var router = express.Router()
// http://mockjs.com/
var Mock = require('mockjs')

router.get('/hello', function (req, res) {
  res.json({ user: 'hello' })
})

router.get('/mock', function (req, res) {
  console.log(req.body)
  var data = Mock.mock({
    top_search: {
      'words|10': [
        {
          query: '一人之下',
          display_query: '《一人之下》565'
        }
      ]
    }
  })
  return res.json(data)
})

router.get('/v4/search/top_search', function (req, res) {
  const data = {
    top_search: {
      words: [
        { query: 'windows 11', display_query: 'Windows 11 系统发布' },
        { query: '一人之下', display_query: '《一人之下》565 话' },
        { query: '杀毒软件之父', display_query: '杀毒软件之父死于狱中' },
        { query: '蒋勇', display_query: '蒋勇律师去世' },
        { query: '明日方舟', display_query: '明日方舟要出博士剧情？' },
        { query: '滕杨天下', display_query: '主播滕杨天下涉赌被提起公诉' },
        { query: '葡萄牙队', display_query: '葡萄牙 2:2 战平法国' },
        { query: '千古玦尘配音', display_query: '《千古玦尘》配音引争议' }
      ]
    }
  }
  return res.json(data)
})

module.exports = router
