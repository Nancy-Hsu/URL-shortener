const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  code: {type: String, require:true},
  url: { type: String, require: true }
})

module.exports = mongoose.model('Url', urlSchema)