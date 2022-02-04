const multer = require("multer");
const Datauri = require("datauri");
const path = require("path");

const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("photo");


module.exports = { multerUploads };