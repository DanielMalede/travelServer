const flights = require("../model/flights-model");

const getIndex = (req, res) => {
  const flightId = flights.find((flight) => flight.id == req.params.id);
  const flightIndex = flights.indexOf(flightId);
  return flightIndex;
};

const getFlights = (req, res) => {
  flights ? res.send(flights) : res.send("no flights to show");
};

const getFlightById = (req, res) => {
  const flightId = flights.find((flight) => flight.id == req.params.id);
  flightId ? res.send(flightId) : res.send("flight not found");
};

const createFlight = (req, res) => {
  const data = req.body.data;
  flights.push(data);
  data ? res.send("flight has added") : res.send("err flight not added");
};

const updateFlights = (req, res) => {
  const flightIndex = getIndex(req);
  if (flightIndex > -1) {
    flights[flightIndex] = req.body.data;
    return res.send("flight update");
  }
  res.send("err flight has not update");
};

const deleteFlight = (req, res) => {
  const flightIndex = getIndex(req);
  const deleteFlight = flights.splice(flightIndex, 1);
  deleteFlight
    ? res.send("flight Deleted")
    : res.send("err flight not found and not deleted");
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
