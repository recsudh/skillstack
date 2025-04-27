const express= require("express")
const {rec_auth}=require("../middleware/auth")
const {sign_up,sign_in,logout}= require("../controller/recruiter_controller")
const {rec_sign_up_validation,rec_sign_in_validation}=  require("../utils/rec_input_validation")

const rec_route= express.Router()

// sign_up
rec_route.post("/rec/sign_up",rec_sign_up_validation,sign_up)


// sign_in
rec_route.post("rec/sign_in",rec_sign_in_validation,sign_in)


// log_out
rec_route.post("/rec/logout",rec_auth,logout)
module.exports= rec_route