const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
    console.log("The pushed element inside the array is",ele)
    console.log("The new array is",arr)
})
let players=[
    {
        "name":"manish",
        "dob":"1/1/1995",
        "gender":"male",
        "city":"jalandhar",
        "sports":["swiming"]
    },
    {
        "name":"gopal",
        "dob":"1/9/1995",
        "gender":"male",
        "city":"delhi",
        "sports":["soccer"]
    },
    {
        "name":"lokesh",
        "dob":"1/1/1990",
        "gender":"male",
        "city":"mumbai",
        "sports":["soccer"]
    }

]
router.post('/players',function(req,res){
    let newPlayer=req.body;
    let newPlayerName=newPlayer.name;
    let flag=false;
    for(let i=0;i<players.length;i++){
        if(players[i].name===newPlayerName){
            flag=true;
            break;
        }
    }
    if (flag){
        console.log("This player is already present in the array!!")
        res.send("This player is already present in the array!!")
    }else{
        players.push(newPlayer)
        console.log("After adding the new player the array is==>",players)
        res.send(players)
    }
})
let persons=[
    {
        "name":"Rohit Singh",
        "age":10,
        "votingstatus":false
    },
    {
        "name":"Rahul Lokesh",
        "age":20,
        "votingstatus":false
    },
    {
        "name":"Mahendra Singh Dhoni",
        "age":70,
        "votingstatus":false
    },
    {
        "name":"Subha Mohanty",
        "age":5,
        "votingstatus":false
    },
    {
        "name":"Hogward Hell",
        "age":40,
        "votingstatus":false
    }
]
router.post('/voting-verification',function(req,res){
    let votingAge=req.query.votingAge;
    let eligiblePersonToVote=[];
    for(let i=0;i<persons.length;i++){
        if( persons[i].age>=votingAge){
            persons[i].votingstatus=true;
            eligiblePersonToVote.push(persons[i])
        }
    }
    console.log("Eligible persons to vote==>",eligiblePersonToVote)
    res.send(eligiblePersonToVote)
})



module.exports = router;