const orderModel=require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel=require("../models/userModel")

const createOrder=async function(req,res){
    let orderData = req.body;
    let userid=orderData.user_Id;

    let user=await userModel.findById(userid);

    if(!user){
        return res.send({status:false,msg:"User doesn't exixt"})
    }

    let productid=orderData.product_Id
    let product=await productModel.findById(productid);

    if(!product){
        return res.send({status:false,msg:"Product doesn't exist"})
    }

    if(!req.appTypeFree && user.balance>=product.price){
        user.balance=user.balance-product.price;
        await user.save();

        orderData.amount=product.price;
        orderData.isFreeAppUser=false;
        let orderCreated=await orderModel.create(orderData)
        return res.send({status:true,data:orderCreated})
    }else if(!req.appTypeFree){
        return res.send({status:false,msg:"user doesn't have sufficient balance"})
    }else{
        orderData.amount=0;
        orderData.isFreeAppUser=true;
        let orderCreated=await orderModel.create(orderData)
        return res.send({status:true,data:orderCreated})
    }



};
module.exports.createOrder=createOrder;
