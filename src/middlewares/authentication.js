const jwt = require('jsonwebtoken');

const validationToken = async function (req, res, next) {

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) {
        return res.send({ status: false, msg: "token must be present" })
    };

    console.log(token);

    let decodedToken = jwt.verify(token, "ajit-singh");
    if (!decodedToken) {
        return res.send({ status: false, msg: "token is invalid" })
    }
    next()
}

const authorise=async function(req,res,next){
    
    let token=req.headers["x-Auth-token"]
    if(!token){token=req.headers["x-auth-token"]}
    if(!token){return res.send({status:false,msg:"Token must be present"})}
  
    let decodedToken=jwt.verify(token,"ajit-singh")
  
    if(!decodedToken){return res.send({status:false,msg:"Entered token is invalid"})}
  
    let userLoggedIn=decodedToken.userId
    let userToModified=req.params.userId
  
    if(userLoggedIn != userToModified){return res.send({status:false,msg:"User logged in is not allowed to modify the requested user's details"})}
  
    next();
  }

module.exports.validationToken = validationToken;
module.exports.authorise=authorise;