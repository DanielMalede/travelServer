const countryModel = require("../model/country-models");
const getIndex = (req) => {
  const countryId = travelStates.find((item) => item.id == req.params.id);
  const countryIndex = travelStates.indexOf(countryId);
  return countryIndex;
};

const getTravel = (req, res) => {
  travelStates ? res.send(travelStates) : res.send("no countries");
};
const createTravelById = (req, res) => {
  const data = req.body.data;
  travelStates.push(data);
  data ? res.send("country has been add") : res.send("country not add");
};
const getTravelById = (req, res) => {
  const country = travelStates.find((item) => item.id == req.params.id);
  country
    ? res.send(country)
    : res.send("no country Found Try different country");
};
const deleteTravel = (req, res) => {
  const getCountryIndex = getIndex(req);
  const deleteCountry = travelStates.splice(getCountryIndex, 1);
  deleteCountry
    ? res.send(travelStates)
    : res.send("not country found to delete");
};
const updateTravel = (req, res) => {
  const getCountryIndex = getIndex(req);
  if (getCountryIndex > -1) {
    travelStates[getCountryIndex] = req.body.data;
    return res.send("successfully Update");
  }
  res.send("error ");
};

module.exports = {
  getTravel,
  createTravelById,
  getTravelById,
  deleteTravel,
  updateTravel,
  getIndex,
};
