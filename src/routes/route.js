const express = require('express');
const router = express.Router();
const CreateBook=require("../controllers/userController")
const GetBookData=require("../controllers/userController")

router.post('/createBook',CreateBook.createBook );

router.get('/getBookData',GetBookData.getBookData);

module.exports = router;