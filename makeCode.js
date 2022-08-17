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

module.exports = makeCode