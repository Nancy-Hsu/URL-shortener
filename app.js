const express = require('express')
const app = express()
const port = 3000
require('./config/mongoose')

app.get('/', (req, res) => {
 res.send('hi')
})

app.listen(port, () => {
  console.log(`app is listening on ${port}`)
})