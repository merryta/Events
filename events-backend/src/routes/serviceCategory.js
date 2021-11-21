const express = require('express');
const router = express.Router();
const api = require('../controllers/serviceCategory');

router.post('/createNewServiceCategory', api.createNewServiceCategory);
router.get('/getAllServiceCategories', api.getAllServiceCategories);

module.exports = router;