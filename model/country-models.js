const  mongoose = require("mongoose");

const Schema = mongoose.Schema

const Country  = new Schema({
  id:{type:Number ,required:true},
  name:{type:String,required:true},
  city:Array,
  capital:String
})
module.exports = mongoose.model('Country',Country);
