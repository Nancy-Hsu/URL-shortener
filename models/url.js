const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  code: {type: string, require:true}
})

module.exports = mongoose.model('Url', urlSchema)