const express = require('express')
const app = express()
const port = 3000
require('./config/mongoose')
const exphbs = require('express-handlebars')
const routes = require('./routes')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`app is listening on ${port}`)
})
