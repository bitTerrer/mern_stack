const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/item");
const cors =  require('cors');

const app = express();

app.use(cors());

// Body Parser middleware
app.use(bodyParser.json());

// db config
const db = require("./config/keys").mongoURI;

// Connecting to db
mongoose
  .connect(db)
  .then(() => {
    console.log("connected with mongo....");
  })
  .catch((err) => {
    console.log(err);
  });

// use routes
app.use("/api/items", items);

//   running server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is up and runnin......._//////////////___-----__");
});
