const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController=require("../controllers/orderController")
const cMw = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser",cMw.mid,userController.createUser);
router.post("/createProduct",productController.createProduct);
router.post("/createOrder",cMw.mid,orderController.createOrder);

module.exports = router;