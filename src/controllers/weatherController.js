let axios=require("axios");

const weather = async function (req, res) {

    try {
  
      let city= req.query.q;
      let appid = req.query.appid;
      console.log(`Query params are ${city} ${appid}`)
  
      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
      }
      let result = await axios(options);
      res.status(200).send({Data: result.data ,message: "successfully fetched weather"})
    }
    catch (err) {
      res.status(500).send({ message: "Something went wrong" })
    }
  }

const temperature=async function(req,res){
 try{
      let city=req.query.q
      let appid=req.query.appid
      console.log(`Query params are ${city} ${appid}`)

      let options={
          method:"get",
          url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
      }
      let result=await axios(options)
      res.status(200).send({Temperature:result.data.main.temp,msg:"Successfully fetched temperature"})
  }

   catch (err) {
       res.status(500).send({ message: "Something went wrong" })
    }
}

const getSortedTemperature=async function(req,res){
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let objOfCities = [];
    
        let len = cities.length;
        for (let i = 0; i < len; i++) {
          let obj = { city: cities[i] }
    
          let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c2f85fadc33491375731f39327499f94`
          }
          let result = await axios(options);
          //console.log(response.data.main.temp)
          temp = result.data.main.temp;
          obj.temperature = result.data.main.temp;
          objOfCities.push(obj);
        }
        let increasingTempOrderOfCities = objOfCities.sort(function (a, b) { return a.temperature - b.temperature })
        console.log(increasingTempOrderOfCities)
        res.status(200).send({ message: "Successfully fetched the temp of all cities", data: increasingTempOrderOfCities })
      }
      catch (err) {
        res.status(500).send({ message: "something went wrong" })
      }
    }



  module.exports.getSortedTemperature=getSortedTemperature
  module.exports.weather=weather;
  module.exports.temperature=temperature