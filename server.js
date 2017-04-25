const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(process.env.PORT || 8080, () => console.log (
	`Your app is listening on port ${process.env.PORT || 8080}`) 
);