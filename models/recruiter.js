const mongoose = require("mongoose")
const bcryptjs= require("bcryptjs")

const recruiter_schema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String, required:true},
    organization:{type:String,required:true}
}) 
recruiter_schema.pre("save",async function(next){
    const User = this0
    if(User.isModified("password")){
        User.password = await bcryptjs.hash(User.password,8)
    }
    next()
})

console.log("hello there");

const recruiter = mongoose.model("recuiter",recruiter_schema)

module.exports= recruiter