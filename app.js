const express = require('express')
const app = express()
const port = 3000
require('./config/mongoose')
const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
 res.render('index')
})

app.listen(port, () => {
  console.log(`app is listening on ${port}`)
})