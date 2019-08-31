const express = require('express')
const http = require('http')
const app = express()

app.get('/status', (req, res) => {
  res.status(200).json({ message: 'OK' })
})

http.createServer(app).listen(3000)