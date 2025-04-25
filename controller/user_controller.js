const User = require("../models/user")
const bcryptjs= require("bcryptjs")
const jwt = require("jsonwebtoken")


const sign_up= async (req,res)=>{
    try{
        const user =  User(req.body)

        await user.save()
        res.status(201).send({
            message:"successfull!!",
            user
        })
        }catch (e){     
            res.status(500).send({
                message:"Unsuccessfull!",
                Error:e.message
            })
    }
}

const sign_in=async(req,res,next)=>{
    try{
        const {email,password}= req.body
        const user = await User.findOne({email})
        if(!user){
            return  res.status(500).send({Error:"email or password is incorrect!"})
        }
        const is_match= await bcryptjs.compare(password,user.password)
        if(!is_match){
            return  res.status(500).send({Error:"email or password is incorrect!"})
        }
        const token =  jwt.sign({_id:user._id},process.env.USER_KEY)
        res.cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 3600000 })
        res.status(200).send({
            message:"successfull!!",
            user
        })
        
    }catch(e){
        // console.log(e);
        res.status(500).send({
            message:"Unsuccessfull!",
            Error:e.message
        })
    }
}

const logout= async(req,res)=>{
    try{   
    res.clearCookie("jwt",{ httpOnly: true, secure: true }).status(202).send({
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