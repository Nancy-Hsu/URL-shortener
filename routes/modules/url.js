const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const makeCode = require('../../makeCode.js')

router.post('/', (req, res) => {
  const url = req.body.url

  /// / check if url is repeated
  Url.findOne({ url })
    .then(data => {
      if (!data) {
        const code = makeCode(5)
        return Url.create({ code, url })
      }
      return data
    })
    .then(data => res.render('done', { url, code: data.code }))
    .catch(error => console.log(error))
})



module.exports = router