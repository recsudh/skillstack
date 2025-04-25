const mongoose = require("mongoose")
const bcryptjs= require("bcryptjs")

const userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    skills:{
        type:[String],
        required:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    }
})


userschema.pre("save",async function(next){
    const User = this
    if(User.isModified("password")){
        User.password = await bcryptjs.hash(User.password,8)
    }
    next()
})


const user = mongoose.model("user",userschema)

module.exports= user