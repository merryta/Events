const express = require('express');
const router = express.Router();
const api = require('../controllers/services');
const userVerification = require("../validation/auth");

router.post('/createService', api.createNewService);
router.get('/getAllServices', userVerification, api.getAllServices);
router.get('/getSingleService/:id', api.getSingleService);
router.get('/getServicesBySubCategories/:id', api.getServicesBySubCategories);
router.get('/getServicesByAccount/:id', api.getServicesByAccountId);
router.delete("/deleteService/:id", api.deleteService);

module.exports = router;