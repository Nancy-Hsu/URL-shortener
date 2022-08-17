const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const makeCode = require('../../makeCode.js')

router.post('/', (req, res) => {
  const code = makeCode(5)
  const url = req.body.url
  /// /check if code is repeated
  Url.findOne({ code })
    .lean()
    .then(item => {
      if (!item) return
      makeCode(5)
    })
    .catch(error => console.log(error))
  /// / check if url is repeated
  Url.findOne({ url })
    .lean()
    .then(website => {
      if (!website) {
        return Url.create({ code, url })
          .then(() => res.render('done', { code }))
          .catch(error => console.log(error))
      }
      res.render('done', { code: website.code })
    }).catch(error => console.log(error))
})



module.exports = router
