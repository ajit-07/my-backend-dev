const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const authenticator=require("../middlewares/authentication")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUsers  )

router.post("/login", userController.loginUser)

router.get("/users/:userId",authenticator.validationToken,authenticator.authorise,userController.getUserDetails)

router.put("/users/:userId",authenticator.validationToken ,authenticator.authorise,userController.updateUserDetails)

router.delete("/users/:userId",authenticator.validationToken,authenticator.authorise,userController.deletUser)

module.exports = router;