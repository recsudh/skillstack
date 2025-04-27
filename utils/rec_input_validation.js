const z = require("zod")

const rec_sign_up_validation= (req,res,next)=>{
    try{

        const userschema = z.object({
            name:z.string(),
            email:z.string().email({ message: "Invalid email address" }),
            password:z.string().min(5, { message: "Must be more than 5 characters long" }),
            organization:z.string()
        })

        const parsed = userschema.safeParse(req.body)
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

const rec_sign_in_validation=(req,res,next)=>{
    try{

        const userschema = z.object({
            email:z.string().email({ message: "Invalid email address" }),
            password:z.string().min(5, { message: "Must be more than 5 characters long" }),

        })

        const parsed = userschema.safeParse(req.body)
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

module.exports={rec_sign_up_validation,rec_sign_in_validation}