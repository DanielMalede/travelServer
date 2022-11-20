const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const FlightCompany = new Schema({
  id:Number,
  name:String,
  airplane:Number,
  numAirPlaneAvailable:Number
})

module.exports = mongoose.model('flightCompany',FlightCompany);
