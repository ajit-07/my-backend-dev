const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    user_Id:ObjectId,
    product_Id:ObjectId,
    amount:Number,
    isFreeAppUser:Boolean,
    date:String
}, { timestamps: true });


module.exports = mongoose.model('order', orderSchema) 
