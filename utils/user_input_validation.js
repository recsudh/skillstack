const z = require("zod")

const sign_up_validation= (req,res,next)=>{
    try{

        const userschema = z.object({
            name:z.string(),
            email:z.string().email({ message: "Invalid email address" }),
            skills:z.string().array(),
            password:z.string().min(5, { message: "Must be more than 5 characters long" }),
            github:z.string().url({ message: "Invalid url" })

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

const sign_in_validation=(req,res,next)=>{
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

module.exports={sign_up_validation,sign_in_validation}