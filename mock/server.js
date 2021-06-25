const express = require('express')
const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 加载路由
app.use('/api', require('./test'))

app.listen(port, () => {
  console.log(`mock server listening at http://localhost:${port}`)
})
