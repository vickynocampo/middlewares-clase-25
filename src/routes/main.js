// ************ Require's ************
const express = require('express');
const router = express.Router();
const logMiddleware = require("../middlewares/logMiddleware")

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', logMiddleware, mainController.index); //

module.exports = router;