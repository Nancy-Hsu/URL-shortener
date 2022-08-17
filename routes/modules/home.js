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
      !data ? res.send('errorMsg: Can\'t found the URL') : res.redirect(`${data.url}`))
    .catch(error => console.log(error))
})

module.exports = router
