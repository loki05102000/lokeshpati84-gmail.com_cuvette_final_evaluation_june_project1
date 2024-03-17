const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

dotenv.config();

const app = express();

const corsOption = {
  origin: "http://localhost:3000",
  methods: "GET,POST,DELETE,PUT",
  credentials: true,
};

app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "All good!",
  });
});

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.json({
      status: "SUCCESS",
      massage: "You have register succesefully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "FAILED",
      massage: "Something went wrong",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      //   let hasPasswordMatched = await bcrypt.compare(password, user.password);
      //   if (hasPasswordMatched) {
      //     const jwtToken = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
      //       expiresIn: 10,
      //     });
      //     res.json({
      //       status: "SUCCESS",
      //       message: "You've logged in successfully!",
      //       jwtToken,
      //     });
      //   } else {
      //     res.json({
      //       status: "FAILED",
      //       message: "Incorrect credentials! Please try again",
      //     });
      //   }
      // } else {
      res.json({
        status: "FAILED",
        message: "User does not exist",
      });
    }
    let hasPasswordMatched = await bcrypt.compare(password, user.password);
    if (!hasPasswordMatched) {
      res.json({
        status: "FAILED",
        message: "Incorrect credentials! Please try again",
      });
    }
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
      expiresIn: 10
    });
    res.json({
      status: "SUCCESS",
      message: "You've logged in successfully!",
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "FAILED",
      message: "Incorrect credentials! Please try again",
    });
  }
});

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGOOSE_URL)
    .then(() =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    )
    .catch((error) => console.error(error));
});
