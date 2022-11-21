const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Flights = new Schema({
  id:Number,
  flightNum:Number,
  departureFlight:String,
  flightLanding:String,
  seatNum:Number,
  departureTime:String,
  LandingTime:String,
  firstClass:Boolean,
  seatsAvailable:Number
})


module.exports = mongoose.model('flight',Flights);
