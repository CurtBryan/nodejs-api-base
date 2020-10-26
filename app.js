// * Authored by Curt Bryan of the 404's

const express = require("express");
const app = express();
const morgan = require("morgan");

// ? If having cors issues while calling from a front end app locally, uncomment the following two lines.
// const cors = require("cors");
// app.use(cors());

// * this is for better logging on the command line
app.use(morgan("dev"));

// * config for accepting JSON correctly in params of API calls
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// * This checks your environment variable to see if you are running locally or not.
// ? If variables are not working, make sure to set an environment variable on your machine and set it to LOCAL (case sensitive)
if (process.env.ENVIRONMENT === "LOCAL") {
  require("dotenv").config();
}

// * sets the api path variable to be used short hand, for reuseability
const apiPath = process.env.API_PATH;

// * health check endpoint, should be on every project
app.get(apiPath + "/v1/health", (req, res, next) => {
  res.status(200).send("ok");
});

// * these two endpoints below are for catching errors, and will give us better errors on the console
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      message: error.message,
    },
  });
});

const port = process.env.API_PORT;

// * this is what function runs and stays open for API to work. Very, very important. lolz.
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});