const express = require('express');
const router = express.Router();
const api = require('../controllers/users');

router.get('/users', api.getAllUsers);
router.post('/createUser', api.createUser);


module.exports = router;