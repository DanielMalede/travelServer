const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const Country  = new Schema({
  id:Number,
  name:String,
  city:Array,
  capital:String
})
module.exports = mongoose.model('Country',Country);
