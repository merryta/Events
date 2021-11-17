const express = require('express');
const router = express.Router();
const api = require('../controllers/accounts');

router.post('/createAccount', api.createAccount);
router.post('/login', api.login);

module.exports = router;