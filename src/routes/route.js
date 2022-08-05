const express = require('express');
const abc = require('../introduction/intro')
const wel = require('../logger/logger.js')
const dat=require('../util/helper.js')
const format=require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    wel.welcomeFunction()
    dat.todayDate()
    dat.todayMonth()
    dat.batchInfo()
    format.trimedString()
    format.lowercase()
    format.uppercase()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason