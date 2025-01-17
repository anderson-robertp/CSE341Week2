const express = require('express');
const path = require('path');
const profRoute = require('./routes/profRoute');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(profRoute);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});