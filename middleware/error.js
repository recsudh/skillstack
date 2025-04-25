const error= async (err,req,res,next)=>{
    // console.log(err);
    if(err){
        res.status(500).send({
            message:"Unsuccesfull",
            Error:err
        })
    }
}
module.exports= error