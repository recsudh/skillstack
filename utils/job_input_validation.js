const z= require("zod")

const job_validation = async(req,res,next)=>{
    try{
        // console.log(req.body);
        const userschema = z.object({
            role:z.string(),
            location:z.string(),
            skills:z.array(z.string()),
            experience:z.string(),
            company:z.string()
        })

        const parsed = userschema.safeParse(req.body)
        // console.log(parsed);
        if(!parsed.success){
            return res.send({
                result: "failed",
                Error:parsed.error
              })
        }
        next()
        
    }catch(e){
        console.log(e);
        res.send(e.message)
    }
}

module.exports= job_validation