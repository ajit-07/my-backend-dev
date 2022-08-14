const express = require('express');
const router = express.Router();
const UserController=require("../controllers/userController")
const GetUserData=require("../controllers/userController")

router.post('/createUser',UserController.createUser );

router.get('/getUserData',GetUserData.getUserData);

module.exports = router;