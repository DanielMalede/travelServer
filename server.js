const express = require("express");
const cors = require("cors");
const travelRouter = require("./routes/travel-router");
const companysCompanysRouter = require("./routes/flightCompanys-router");
const flightsRouter = require("./routes/flight-router");
const app = express();
const port = 4500;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/travel", travelRouter);
app.use("/flightCompanys", companysCompanysRouter);
app.use("/flights", flightsRouter);

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(port, () => {
  console.log(`server is ${port}`);
});
