const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.get("/test-you", function (req, res) {
    res.send("My second api!")
})

router.post("/createPublisher",publisherController.createPublisher);
router.post("/createAuthor",authorController.createAuthor);
router.post("/createBook",bookController.createBook);
router.get("/getBookData",bookController.getBookData)
router.put("/updateBook",bookController.updateBook)

module.exports = router;