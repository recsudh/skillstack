const job= require("../models/jobs")

const job_post_create= async(req,res)=>{
    try{
        console.log(req.body);
        const post_id= req._id
        const Job = new job({...req.body,post_id:post_id})
        if(!Job){
          return   res.json({status:"unsuccessfull"})
        }
        await Job.save()
        res.status(200).send({status:"sucessfull",Job})
    }catch(e){
        console.log(e);
        res.status(200).send({status:"Unsucessfull",Error:e.message})

    }
}

const job_post_delete= async(req,res)=>{
    try{
        const _id = req._id
        console.log(_id);
        if(!_id){
            return res.send("Please validate yourself!!")
        }
        const Job= await job.find({post_id:_id})
        console.log(Job);
        await job.deleteMany({post_id:_id})
        res.status(200).send("JOB post Deleted")
    }catch(e){
        console.log(e);
        res.status(200).send({status:"Unsucessfull",Error:e.message})

    }
}


module.exports={job_post_create,job_post_delete}