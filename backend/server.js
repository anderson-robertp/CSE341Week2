const express = require('express');
const cors = require('cors');
//const path = require('path');
const profRoute = require('./routes/profRoute');
const profController = require('./controllers/profController');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
//app.use('/professional', profRoute);
app.use('/api', profRoute);

app.get('/professional', profController.getUser);

//app.use(express.static(path.join(__dirname, 'public')));

//app.use(profRoute);

app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});