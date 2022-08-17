const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:code', (req, res) => {
  const { code } = req.params
  Url.findOne({ code })
    .then(data =>
      data ? res.redirect(`${data.url}`) : res.send('<h1>Sorry, this URL could not be found ...</h1>'))
    .catch(error => console.log(error))
})

module.exports = router
