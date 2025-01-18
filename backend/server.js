const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
//const path = require('path');
const profRoute = require('./routes/profRoute');
//const profController = require('./controllers/profController');
const app = express();
//const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const PORT = process.env.PORT || 8080;

app.use(cors()); // Enable CORS
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/professional', profRoute);

//app.use('/professional', profRoute);
//app.use('/api', profRoute);

//app.get('/professional', profController.getUser);

// MongoDB Connection
mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(PORT);
      console.log(`Connected to DB and listening on ${PORT}`);
    }
  });