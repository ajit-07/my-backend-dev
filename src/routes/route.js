const express = require('express');
const router = express.Router();
const UserController=require("../controllers/userController")

router.post('/createUser',UserController.createUser );

router.get('/getUserData',async function(req,res){
    let allUsers= await userModel.find();
    res.send({msg:allUsers});
});



module.exports = router;