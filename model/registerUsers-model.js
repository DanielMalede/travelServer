const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Users = new Schema({
  id:Number,
  F_name:{type:String,required:true},
  L_name:String,
  email:String,
  password:String
})

module.exports = mongoose.model('users',Users);
