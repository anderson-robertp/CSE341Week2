const express = require('express');
//const path = require('path');
const profRoute = require('./routes/profRoute');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); // Parse JSON request bodies
app.use('/professional', profRoute);
app.use('/api', profRoute);

//app.use(express.static(path.join(__dirname, 'public')));

//app.use(profRoute);

app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});