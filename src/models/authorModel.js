const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id:Number,
    author_name: String, 
    address:String,
    age:Number
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)