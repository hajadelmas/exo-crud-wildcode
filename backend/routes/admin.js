const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.post('/add-argo', adminController.postArgo);



module.exports = router;