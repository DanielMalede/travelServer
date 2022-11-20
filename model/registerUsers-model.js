const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const Users = new Schema({
  id:Number,
  F_name:String,
  L_name:String,
  email:String,
  password:String
})

module.exports = mongoose.model('users',Users);
