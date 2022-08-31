const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//Problem-1

const createUsers = async function (req,res) {
  
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ Status:true,DataCreated: savedData });
};

//Problem-2

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "functionUp",
    },
    "ajit-singh"
  );
  console.log(token);
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

//Problem-3

const getUserDetails=async function(req,res){


    let userId=req.params.userId
    let userDetails=await userModel.findById(userId)

    if(!userDetails){
      return res.send({status:false,msg:"user details not present in database"})
    }

    res.send({status:true,fetchedData:userDetails})

}





//Problem-4
  

const updateUserDetails = async function (req, res) {


  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.send({ status: true, data: updatedUser });
};

//Problem-5

const deletUser=async function(req,res){


    let userId=req.params.userId
    let user=await userModel.findById(userId)

    if(!user){
      return res.send({status:false,msg:"user data doesn't exists"})
    }

    let updateUser=await userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
    res.send({status:true,updatedData:updateUser})

}

module.exports.createUsers=createUsers;
module.exports.getUserDetails=getUserDetails;
module.exports.updateUserDetails=updateUserDetails;
module.exports.loginUser=loginUser;
module.exports.deletUser=deletUser;
