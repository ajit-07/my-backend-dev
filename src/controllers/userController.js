const req = require("express/lib/request")
const userModel = require("../models/userModel.js");

const createUser=async function(req,res){
    let data=req.body;

    data.isFreeAppUser = req.appTypeFree

    let savedData=await userModel.create(data);
    res.send({status:true,msg:savedData});

};

module.exports.createUser=createUser;





