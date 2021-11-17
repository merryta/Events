const express = require('express');
const router = express.Router();
const api = require('../controllers/services');

router.post('/createService', api.createNewService);
router.get('/getAllServices', api.getAllServices);

module.exports = router;