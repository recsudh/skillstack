const mongoose = require("mongoose")


const jobschema = new mongoose.Schema({
    role:{type:String,required:true},
    location:{type:String,required:true},
    skills:{type:[String],required:true},
    experience:{type:String,required:true},
    company:{type:String,required:true},
    post_id:{type:mongoose.Schema.Types.ObjectId,ref:"recruiter"}
})

const job = mongoose.model("job",jobschema)

module.exports =job