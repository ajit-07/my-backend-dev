const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    user_Id:{
        type:ObjectId,
        ref:"user"
    },
    product_Id:{
        type:ObjectId,
        ref:"product"
    },
    amount:Number,
    isfreeappuser:Boolean,
    date:String
}, { timestamps: true });


module.exports = mongoose.model('order', orderSchema) 
