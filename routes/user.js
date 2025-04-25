const express = require("express")
const {sign_up,sign_in,logout}= require("../controller/user_controller")
const {sign_up_validation,sign_in_validation}=require("../utils/input_validation")
const auth= require("../middleware/auth")

const user_route = express.Router()


// signup route
user_route.post("/sign_up",sign_up_validation,sign_up)

// sign_in route
user_route.post("/sign_in",sign_in_validation,sign_in)

// logout
user_route.post("/logout",auth,logout)



module.exports = user_route