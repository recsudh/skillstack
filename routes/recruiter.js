const express= require("express")
const {sign_up,sign_in,logout}= require("../controller/recruiter_controller")

const rec_route= express.Router()


rec_route.post("/rec/sign_up",sign_up)



module.exports= rec_route