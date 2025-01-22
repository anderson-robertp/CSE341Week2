const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getAllData); 
router.get('/:id', contactController.getContact);

router.post('/', contactController.createContact);

router.put('/:id', contactController.updateContact);

router.delete('/:id', contactController.deleteContact);

module.exports = router;