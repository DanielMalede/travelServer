const mongoose = require("mongoose");

const Schema = mongoose.Schema

const FlightCompany = new Schema({
  id:{type:Number},
  name:{type:String},
  airplane:Number,
  numAirPlaneAvailable:Number
})

module.exports = mongoose.model('flightCompany',FlightCompany);