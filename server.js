const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const memberRoutes = require("./app/routes/member.routes")
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
},err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
const members = require('./app/controllers/member.controller.js');

app.post('/add', members.create);
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
})
// app.use("/members",memberRoutes)
// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});