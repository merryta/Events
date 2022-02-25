const express = require('express');
const router = express.Router();
const api = require('../controllers/profile');
const { upload } = require("../middleware/imageUploader");

router.post('/createProfile', upload, api.createProfile);
router.get('/getAllProfiles', api.getAllProfiles);
router.get('/getData', api.getData);
router.get('/getProfileByAccount/:id', api.getProfileByAccountId);
router.get('/getProfileServices/:id', api.getProfileServices);
router.patch('/updateProfile/:id', api.updateProfile);
router.patch('/updateProfilePhoto/:id', upload, api.updateProfilePhoto);
router.delete("/deleteProfile/:id", api.deleteProfile);

module.exports = router;