const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const userRoute = require("./src/routes/Users");
const authRoute = require("./src/routes/Auth");

//midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello word",
  });
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
