const express = require('express');
const router = express.Router();

const api = require('../controllers/serviceSubCategory');

router.post('/createServiceSubCategory', api.createServiceSubCategory);

module.exports = router;