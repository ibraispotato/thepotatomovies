const express = require('express');
const {signupUser,LoginUser,reset,forgotpassword} = require("../controllers/userControllers")
const router = express.Router()
// const {requires}  = require('../middleware/middleware')

///forgotpassword
router.post("/forgotpassword", forgotpassword)
///reset
router.post("/resetpassword/:token",reset)

////login 
router.post('/login', LoginUser)


//signup
router.post('/signup', signupUser)

module.exports = router