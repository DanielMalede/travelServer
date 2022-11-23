const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Flights = new Schema({
  id: { type: Number, required: true },
  flightNum: { type: Number, required: true },
  departureFlight: { type: String, required: true },
  flightLanding: { type: String, required: true },
  seatNum: { type: Number, required: true },
  departureTime: { type: String, required: true },
  LandingTime: { type: String, required: true },
  firstClass: Boolean,
  seatsAvailable: { type: Number, required: true },
});

module.exports = mongoose.model("flight", Flights);
