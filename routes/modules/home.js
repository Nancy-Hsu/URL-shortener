const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:code', (req, res) => {
  const { code } = req.params
  Url.findOne({ code })
    .lean()
    .then(website => res.redirect(`${website.url}`))
    .catch(error => console.log(error))
})

module.exports = router
