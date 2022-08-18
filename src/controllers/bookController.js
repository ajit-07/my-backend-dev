const BookModel= require("../models/bookModel.js")
const AuthorModel=require("../models/authorModel.js")
const createBook= async function (req, res) {
    let data= req.body
    let authorid=data.author_id
    if(!authorid){
        return res.send({status:false,msg:"Authord id is missing"})
    }
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const getBookData= async function(req,res){
    let authors= await AuthorModel.find({author_name:"CHETAN BHAGAT"})
    let bookId= await BookModel.find({author_id:{$eq:authors[0].author_id}})
    res.send({msg:bookId})
}
const findAuthor= async function(req,res){
    let priceOfTheBook= await BookModel.findOneAndUpdate({name:"TWO STATES"},{price:100},{new:true})
    let updatedPrice= priceOfTheBook.price;
    let authorUpdate=await AuthorModel.find({author_id:{$eq:priceOfTheBook.author_id}}).select({author_name:1,_id:0})
    res.send({msg:authorUpdate,updatedPrice})
}

const findBook= async function(req,res){
    let books=await BookModel.find({price:{$gte:50,$lte:100}})
    let authorsofbooks=books.map(x=>x.author_id)
    let NewBooks= await AuthorModel.find({author_id:authorsofbooks}).select({author_name:1,_id:0})
    res.send({msg:NewBooks})
}
module.exports.createBook= createBook;
module.exports.getBookData=getBookData;
module.exports.findAuthor=findAuthor;
module.exports.findBook=findBook;

