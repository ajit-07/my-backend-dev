const axios=require("axios");

const getAllMemes=async function (req,res){
    try{
        let options={
            method:"get",
            url:`https://api.imgflip.com/get_memes`
        }
        let result=await axios(options)
        let data=result.data
        console.log(result)
        res.status(200).send({status:true,msg:data})

    }
    catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const editMeme=async function(req,res){
try {let template_id=req.query.template_id
    let text0=req.query.text0
    let text1=req.query.text1
    let username=req.query.username
    let password=req.query.password
    console.log(`Query params are ${template_id} ${text0} ${text1} ${username} ${password}`)

    let options={
        method:"post",
        url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result=await axios(options)
    let data=result.data
    res.send({status:true,msg:data})
}
catch(err){
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}
module.exports.editMeme=editMeme;
module.exports.getAllMemes=getAllMemes;