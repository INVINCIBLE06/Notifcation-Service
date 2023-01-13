const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

const dbConfig = require("./configs/db.config");

/**
 * Intializing the db connection
 */
mongoose.connect(dbConfig.DB_URL, () => {
    console.log("Connected to Mongodb")
}, err => {
    console.log("Some err occured", err.message);
})

/**
 * Switch the router to server.js file
 */
require("./routes/notification.route")(app);

/**
 * Attach the cron file
 */

require("./Scheduler/emailScheduler");

app.listen(8080, () => {
    console.log("Server Started Successfully");
})