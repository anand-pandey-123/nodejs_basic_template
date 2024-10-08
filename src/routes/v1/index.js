const express= require("express");
const router= express.Router();
const {infoController, homeController} = require('../../controllers');

router.get('/info', infoController.info);
router.get('/home', homeController.home)

module.exports = router;