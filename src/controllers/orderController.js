const orderModel=require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel=require("../models/userModel")

const createOrder=async function(req,res){
    let data = req.body;
    let order1 = await orderModel.create(data);
    let userId = req.body.user_Id; 
    let productId = req.body.product_Id;      
    let validUserId = await userModel.findById(userId);
    let validProductId= await productModel.findById(productId)

    if (validUserId && validProductId) {
        let validation = req.headers.isfreeappuser;
        if (validation == "true") {
            order1.amount = 0;
            order1.isfreeappuser = true;
            order1.save();
            res.send({ data: order1 });
        }
        else {
            let a = validUserId.balance - validProductId.price
            if (a > 0) {
                validUserId.balance = a;
                validUserId.save();
                res.send({ data: validUserId })
            }
            else {
                res.send({ msg: "insufficient balance" });
            }
        }
    }
    else {
        res.send("The userId and Productid is not valid");
    }

};

module.exports.createOrder=createOrder;
