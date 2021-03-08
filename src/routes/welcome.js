const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
  const resObject = {
    message: "Welcome to MikroBooks",
    status: 200,
    createdBy: "PLUG-IN 007",
    Documentation: ""
  }
  res.status(200).json(resObject);
});

module.exports = welcomeRouter;