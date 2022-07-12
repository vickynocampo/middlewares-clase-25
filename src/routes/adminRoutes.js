// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

// ************ Middleware Require ************
const adminMiddleware = require("../middlewares/adminMiddleware")

router.get('/', adminMiddleware, adminController.dashboard ); //

module.exports = router;