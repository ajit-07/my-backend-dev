const PublisherModel=require("../models/publisherModel.js");

const createPublisher=async function(req,res){
    let publisherData=req.body;
    let publisherCreated= await PublisherModel.create(publisherData);
    res.send({publisherData:publisherCreated});
}

module.exports.createPublisher=createPublisher;