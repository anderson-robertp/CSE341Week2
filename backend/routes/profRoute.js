const express = require('express');
const profController = require('../controllers/profController');

const router = express.Router();

router.get('/professional', profController.getIndex);

module.exports = router;