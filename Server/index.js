// Node modules
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

// Load env file
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
	require('dotenv').config({ path: './env' });
	require('dotenv').config();

	if (!process.env.PORT) {
		console.error('Required environment variable not found. Are you sure you have a ".env" file in your application root?');
		console.error('If not, you can just copy "example.env" and change the defaults as per your need.');
		process.exit(1);
	}
}

// db configuration
require("./dbDefaultSync");

// express app initialise
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// API routes initialise
require("./routes/index")(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT);
console.log("api runnging on port: " + PORT);
