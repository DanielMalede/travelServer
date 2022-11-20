const mongoose = require("mongoose");
const DBConnection = process.env.MY_DB_KEY;
mongoose
  .connect(DBConnection, { userNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connection succeed"))
  .catch((error) => {
    console.log("connection ", error.message);
  });

module.exports = mongoose.connection
