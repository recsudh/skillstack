const express= require("express")
const {rec_auth}=require("../middleware/auth")
const {sign_up,sign_in,logout}= require("../controller/recruiter_controller")
const {rec_sign_up_validation,rec_sign_in_validation}=  require("../utils/rec_input_validation")
const {job_post_create,job_post_delete}= require("../controller/job_controller")
const job_validation= require("../utils/job_input_validation")

const rec_route= express.Router()

// sign_up
rec_route.post("/rec/sign_up",rec_sign_up_validation,sign_up)


// sign_in
rec_route.post("/rec/sign_in",rec_sign_in_validation,sign_in)


// log_out
rec_route.post("/rec/logout",rec_auth,logout)

// posting jobs
rec_route.post("/rec/job_post/create",job_validation,rec_auth,job_post_create)


// deleteing a job post
rec_route.delete("/rec/job_post/delete",rec_auth,job_post_delete)

module.exports= rec_route