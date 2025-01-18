const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getAllData);
router.get('/:id', contactController.getContact);

module.exports = router;