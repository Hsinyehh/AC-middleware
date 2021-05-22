// app.js
const { response } = require('express')
const express = require('express')
const { duration } = require('moment')
const moment = require('moment')
const app = express()
const port = 3000




app.use(function (req, res, next) {
  const currentDate = new Date()
  const TimeStamp = currentDate.getTime()
  req.start = Date.now()

  console.log('requestTime: ' + moment(req.start).format('YYYY-MM-DD HH:mm:ss.SSS'))
  res.on('finish', function () {
    const responseTime = Date.now()
    console.log('responseTime: ' + moment(responseTime).format('YYYY-MM-DD HH:mm:ss.SSS'))
    const duration = responseTime - req.start

    console.log(moment(req.start).format('YYYY-MM-DD HH:mm:ss.SSS') + ' | ' + req.method + ' from ' + req.originalUrl + ' | Total Time: ' + duration + 'ms')
  })

  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')

})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

app.use(function (req, res) {
  const time = Date.now() - req.start
  console.log(time)
})