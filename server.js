const express = require("express");
const cors = require("cors");
const travelRouter = require("./routes/travel-router");
const companysCompanysRouter = require("./routes/flightCompanys-router");
const flightsRouter = require("./routes/flight-router");
const usersAccess = require("./routes/user-router");
const app = express();
const port = 4500;
const dotenv = require("dotenv");
dotenv.config();
const users = require("./model/registerUsers-model");
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const middleWareUrlAccesses = (req, res, next) => {
  const user = users.find((item) => item.email == req.body.users.email);
  user
    ? user.password == req.body.password
      ? next()
      : res.send("pas no")
    : res.send("email not find");
};
app.use("/travel", travelRouter);
app.use("/flightCompanys", companysCompanysRouter);
app.use("/flights", flightsRouter);
app.use("/signIn", usersAccess);
app.get("/", middleWareUrlAccesses, (req, res) => {
  res.send("success");
});
app.listen(port, () => {
  console.log(`server is ${port}`);
});
