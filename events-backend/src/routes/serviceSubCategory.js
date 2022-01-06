const express = require('express');
const router = express.Router();

const api = require('../controllers/serviceSubCategory');

router.post('/createServiceSubCategory', api.createServiceSubCategory);
router.get('/getAllServiceSubCategories', api.getAllServiceSubCategories);
router.get('/getSingleSubCategory/:id', api.getSingleServiceSubCategory);
router.delete("/deleteSubCategory/:id", api.deleteServiceSubCategory);

module.exports = router;