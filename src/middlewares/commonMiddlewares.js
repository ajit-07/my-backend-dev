const mid=function(req,res,next){
    let validationCheck=req.headers.isfreeappuser;
    console.log(req.headers);
    if(validationCheck){
        next();
    }
    else{
        res.send({msg:"The request is missing a mandatory header isFreeAppUser!"});
    }
}
module.exports.mid =mid;