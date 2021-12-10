const express = require('express');
const router = express.Router();
const api = require('../controllers/services');
const verify = require("../validation/auth");

router.post('/createService', verify, api.createNewService);
router.get('/getAllServices', api.getAllServices);
router.get('/getSingleService/:id', api.getSingleService);
router.get('/getServicesBySubCategories/:id', api.getServicesBySubCategories);

module.exports = router;