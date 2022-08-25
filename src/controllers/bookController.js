const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const PublisherModel = require("../models/publisherModel")


const createBook = async function (req, res) {
    let book = req.body
    let aId = book.author_id
    let pId = book.publisher_id
    let authorid1 = await AuthorModel.find().select({ _id: 1 })
    let publisherid1 = await PublisherModel.find().select({ _id: 1 })

    if (!aId) {
        return res.send({ status: false, msg: "Author Id is required!!" })
    }
    if (!pId) {
        return res.send({ status: false, msg: "Publisher Id is required!!" })
    }
    for(let i=0;i<authorid1.length;i++){
        if(authorid1[i]._id==aId){
            for(let j=0;j<publisherid1.length;j++){
                if(publisherid1[j]._id==pId){

                    let bookCreated=await BookModel.create(book)
                    return res.send({msg:bookCreated})

                }
            }return res.send({msg:"Publisher Id is not present"})
        }
    }return res.send({msg:"Author Id is not present"})
}   


let getBookData=async function(req,res){
    let bookData=await BookModel.find().populate(["author_id","publisher_id"])
    res.send({msg:bookData})
}

     let updateBook=async function(req,res){
     let updatedBook=await BookModel.updateMany({"publisher_id.name":["Penguin","HarperCollins"]},{isHardCover:true},{new:true})
     res.send({msg:updatedBook})

 }

module.exports.createBook = createBook;
module.exports.getBookData=getBookData;
module.exports.updateBook=updateBook;

