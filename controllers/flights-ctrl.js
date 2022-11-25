const flights = require("../model/flights-model");

const getFlights = async (req, res) => {
  await flights.find({}).then((result, err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: "no data" });
    }
    if (result) {
      return res.status(200).json({ success: true, message: result });
    }
  });
};

const getFlightById = async (req, res) => {
  await flights
    .findById(req.params.id)
    .then((flights) => {
      if (!flights) {
        return res.json({ success: false, message: "country not found" });
      }
      return res.status(200).json({ success: true, flights });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createFlight = async (req, res) => {
  await flights
    .insertMany(req.body.data)
    .then(() =>
      res.status(200).json({ success: true, message: "country added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateFlights = async (req, res) => {
  await flights
    .findByIdAndUpdate(req.params.id, req.body.data)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

const deleteFlight = async (req, res) => {
  await flights
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

const getFlightByNumFlight = (req, res) => {
  const flightName = flights.find(
    (flight) => flight.flightNum == req.params.flightNum
  );
  flightName ? res.send(flightName) : res.send("flight name not found");
};

const getAllFlightsFirstClass = (req, res) => {
  const flightsFirstClass = flights.filter(
    (flights) => flights.firstClass == true
  );
  flightsFirstClass
    ? res.send({
        massage: "first class has found",
        flightsFirstClass: flightsFirstClass,
      })
    : res.send("no first class flights found");
};

const getFlightByTimeDepartureTime = (req, res) => {
  const flightByTime = flights.filter(
    (flights) => flights.departureTime == req.params.departureTime
  );
  flightByTime ? res.send(flightByTime) : res.send("no flights at this time");
};

const getFlightByDepartureAndLanding = (req, res) => {
  const flightsAvailable = flights.filter((flights) =>
    console.log(req.body.departure)
  );
  flightsAvailable
    ? res.send(flightsAvailable)
    : res.send("no flights at this time");
};

module.exports = {
  getFlights,
  getFlightById,
  createFlight,
  updateFlights,
  deleteFlight,
  getFlightByNumFlight,
  getAllFlightsFirstClass,
  getFlightByTimeDepartureTime,
  getFlightByDepartureAndLanding,
};
