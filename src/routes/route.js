const express = require('express');
const router = express.Router();

const AuthorController = require("../controllers/authorcontroller.js")
const BookController = require("../controllers/bookController.js")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", AuthorController.createAuthor)
router.post("/createBook", BookController.createBook)
router.get("/getBookData",BookController.getBookData)
router.get("/findAuthor",BookController.findAuthor)
router.get("/findBook",BookController.findBook)


module.exports = router;