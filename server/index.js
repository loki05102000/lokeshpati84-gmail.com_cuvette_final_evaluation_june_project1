const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "All good!",
  });
});

app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.MONGOOSE_URL).then(() => console.log(`Server running on http://localhost:${process.env.PORT}`))
  .catch(error =>console.error(error))
});
