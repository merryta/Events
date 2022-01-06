const express = require('express');
const router = express.Router();
const api = require('../controllers/services');
const verify = require("../validation/auth");

router.post('/createService', api.createNewService);
router.get('/getAllServices', verify, api.getAllServices);
router.get('/getSingleService/:id', api.getSingleService);
router.get('/getServicesBySubCategories/:id', api.getServicesBySubCategories);
router.delete("/deleteService/:id", api.deleteService);

module.exports = router;