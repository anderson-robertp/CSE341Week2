const express = require('express');
const profController = require('../controllers/profController');

const router = express.Router();

router.get('/', profController.getUser);

module.exports = router;