const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController=require("../controllers/weatherController")
const MemeController=require("../controllers/memeController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

//Assignment Solutins=============>

//Cowin Problem's Solutions

router.get("/cowin/getByDistrictId",CowinController.getByDistrictId)

//Weather Problem's Solutions

router.get("/weather/getByCity",WeatherController.weather)
router.get("/weather/tempByCity",WeatherController.temperature)
router.get("/getSortedTemperatureOfCities",WeatherController.getSortedTemperature)

//Meme Problem's solutions

router.get("/getAllMemes",MemeController.getAllMemes)
router.post("/editMeme",MemeController.editMeme)


module.exports = router;