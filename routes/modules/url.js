const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

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

function makeCode (number) {
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

module.exports = router
