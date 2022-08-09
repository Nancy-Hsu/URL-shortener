const express = require('express')
const app = express()
const port = 3000
require('./config/mongoose')
const exphbs = require('express-handlebars')
const Url = require('./models/url')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const code = makeCode(5)
  const url = req.body.url
  Url.findOne({ url })
    .lean()
    .then(website => {
      if (!website) {
        return Url.create({ code, url })
          .then(() => res.render('done', { code }))
          .catch(error => console.log(error))
      }
      res.render('done', { code: website.code })
      
    }

    )

})

app.get('/:code', (req, res) => {
  const { code } = req.params
  Url.findOne({ code })
    .lean()
    .then(website => res.redirect(`${website.url}`))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`app is listening on ${port}`)
})

function makeCode(number) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collection = (lowerCaseLetters + upperCaseLetters + numbers).split('')
  let code = ''
  for (let i = 0; i < number; i++) {
    code += collection[Math.floor(Math.random() * collection.length)]
  }
  return code
}