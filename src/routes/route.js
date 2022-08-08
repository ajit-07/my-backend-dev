const express = require('express');
const _ = require('underscore')

const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper')
const router = express.Router();
const loadash=require('lodash')

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    loggerModule.printInfo()
    formatterModule.trimMyString()
    formatterModule.getUpperCaseString()
    formatterModule.changetoLowerCase()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    let weekdend = ['Saturday','Sunday','Monday']
    let result = _.first(weekdend, 2)
    console.log('Unserscore example resultr is ',result)
    let monthA=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let resultM=loadash.chunk(monthA,3)
    console.log("Result for chunk function is==>",resultM)
    let oddN=[1,3,5,7,9,11,13,15,17,19]
    let resultO=loadash.tail(oddN)
    console.log("Result for tail function is==>",resultO)
    let array0=[1,2,4]
    let array1=[9,4,7,6]
    let array2=[2,3,5,6,8,7,10]
    let resultA=loadash.union(array0,array1,array2)
    console.log("Result for union function is===>",resultA)
    let movies=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    let resultMo=loadash.fromPairs(movies)
    console.log("Result for form pairs function is==>",resultMo)
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason