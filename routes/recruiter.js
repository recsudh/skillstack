const express= require("express")
const {sign_up,sign_in,logout}= require("../controller/recruiter_controller")
const {rec_sign_up_validation,rec_sign_in_validation}=  require("../utils/rec_input_validation")

const rec_route= express.Router()


rec_route.post("/rec/sign_up",rec_sign_up_validation,sign_up)



module.exports= rec_route