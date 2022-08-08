const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()


    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/movies',function(req,res){
    let movies=["3-IDIOTS","PK","KASHMMIR FILES","KGF"]
    res.send(movies)
    console.log("Movies name is==>",movies)
})

// router.get('/movies/:indexNumber',function(req,res){
//     let movies=["3-IDIOTS","PK","KASHMMIR FILES","KGF"]
//     let index=req.params.indexNumber
//     console.log("This is the required movie at the index number",index,"==>",movies[index])
//     res.send(movies[index])

    
// })

router.get('/movies/:indexNumber',function(req,res){
    let movies=["3-IDIOTS","PK","KASHMMIR FILES","KGF"]
    let index=req.params.indexNumber
    
    if(index > movies.length){
        console.log("Error:Use a valid index")
        return res.send("Error:Use a valid index")
        
    }else{
        res.send(movies[index])
        console.log("This is the required movie at the index number",index,"==>",movies[index])
    }

})

router.get('/films',function(req,res){
    let moviesName=[{"id":1,"name":"3-IDIOTS"},{"id":2,"name":"PK"},{"id":3,"name":"KASHMMIR FILES"},{"id":4,"name":"KGF"}]
    res.send(moviesName)
    console.log("Required films with their corresponding Id's are==>",moviesName)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send(studentName)
})

module.exports = router;