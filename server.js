const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = 4500;
const cors = require("cors");
const db = require("./DB");

const travelRouter = require("./routes/travel-router");
const companysCompanysRouter = require("./routes/flightCompanys-router");
const flightsRouter = require("./routes/flight-router");
const usersAccess = require("./routes/user-router");
const users = require("./model/registerUsers-model");

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const middleWareUrlAccesses = (req, res, next) => {
  const user = users.find((item) => item.email == req.body.users.email);
  user
    ? user.password == req.body.users.password
      ? (res.send("welcome"), next())
      : res.send("pas no")
    : res.send("email not find");
};
const middleWareFlightCompanyAccesses = (req, res, next) => {
  const user = users.find((item) => item.email == req.body.user.email);
  user
    ? req.body.user.token
      ? (res.send("welcome"), next())
      : res.send("token not found")
    : res.send("email not find");
};

app.use(
  "/flightCompanys",
  middleWareFlightCompanyAccesses,
  companysCompanysRouter
);
app.use("/travel", travelRouter);
app.use("/flights", flightsRouter);
app.use("/users", usersAccess);

app.get("/", middleWareUrlAccesses, (req, res) => {
  res.send("success");
});
app.use((req, res, next) => {
  res.status(404).send("404 error page not found");
});

app.listen(port, () => {
  console.log(`server is ${port}`);
});
