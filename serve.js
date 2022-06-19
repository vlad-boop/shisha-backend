// import {create} from "./app/controllers/users.controller"; 
const {findAll} = require("./app/controllers/users.controller");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();
var corsOptions = {
  origin: "https://shish.network"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

const Users = db.users;
const Op = db.Sequelize.Op;

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/users.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
