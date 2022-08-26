const userModel = require("../models/userModel.js");

const createUser=async function(req,res){
    let data=req.body;
    let savedData=await userModel.create(data);
    res.send({status:true,msg:savedData});

};

module.exports.createUser=createUser;





