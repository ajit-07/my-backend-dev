const AuthorModel=require("../models/authorModel.js");

const createAuthor= async function(req,res){
    let data=req.body;
    let authorid=data.author_id;
    if(!authorid){
        return res.send({status:false,msg:"Author id missing"});
    };
    let savedData=await AuthorModel.create(data);
    res.send({msg:savedData});
}
module.exports.createAuthor=createAuthor;