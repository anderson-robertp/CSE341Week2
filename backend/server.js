const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./db/connect');
const profRoute = require('./routes/profRoute');
const contactRoute = require('./routes/contacts'); // Ensure this is correctly imported

const app = express();
const port = process.env.port || 8080;

app.use(cors()); // Enable CORS
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/professional', profRoute)
  .use('/contacts', contactRoute); // Ensure this is correctly used

// MongoDB Connection
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});