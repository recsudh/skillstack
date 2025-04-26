const Recruiter= require("../models/recruiter")
const bcryptjs= require("bcryptjs")
const jwt = require("jsonwebtoken")


const sign_up= async (req,res)=>{
    try{
        const recruiter =  Recruiter(req.body)

        await recruiter.save()
        res.status(201).send({
            message:"successfull!!",
            recruiter
        })
        }catch (e){     
            res.status(500).send({
                message:"Unsuccessfull!",
                Error:e.message
            })
    }
}

const sign_in=async(req,res)=>{
    try{
        const {email,password}= req.body
        const recruiter = await Recruiter.findOne({email})
        if(!user){
            return  res.status(500).send({Error:"email or password is incorrect!"})
        }
        const is_match= await bcryptjs.compare(password,user.password)
        if(!is_match){
            return  res.status(500).send({Error:"email or password is incorrect!"})
        }
        const token =  jwt.sign({_id:user._id},process.env.RECRUITER_KEY)
        res.cookie('rec_jwt',token, { httpOnly: true, secure: true, maxAge: 3600000 })
        res.status(200).send({
            message:"successfull!!",
            recruiter
        })
        
    }catch(e){
        
        res.status(500).send({
            message:"Unsuccessfull!",
            Error:e.message
        })
    }
}

const logout= async(req,res)=>{
    try{   
    res.clearCookie("rec_jwt",{ httpOnly: true, secure: true }).status(202).send({
        message:"Successfully logged out!",
    })
}catch(e){
    res.status(500).send({
        message:"Unsuccessfull!",
        Error:e.message
    })
}
}

module.exports= {sign_up,sign_in,logout}