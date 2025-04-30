const jwt = require("jsonwebtoken");


const auth = async function (req, res, next) {
try{ 
    // console.log(req.headers);
    const token = req.headers.cookie.replace("jwt=","");
    // console.log(token);
    const verify = jwt.verify(token,process.env.USER_KEY)
    if(!verify){
    res.status(500).send("Error:Invalid token")
}
    req._id= verify._id
    req.token= token
    next()
}catch(e){
    res.status(500).send({
        message:"Unsuccessfull",
        Error:e.message
    })
}
 
};

const rec_auth = async function (req, res, next) {
    try{ 
        console.log(req.headers);
        if(!req.headers.cookie){
            return  res.send("User cannot be validated. Please Login and try again!")
         }
        const token = req.headers.cookie.replace("rec_jwt=","");
    
        console.log(token);
        const verify = jwt.verify(token,process.env.RECRUITER_KEY)
        if(!verify){
        res.status(500).send("Error:Invalid token")
    }
        req._id= verify._id
        req.token= token
        next()
    }catch(e){
        console.log(e);
        res.status(500).send({
            message:"Unsuccessfull",
            Error:e.message
        })
    }
     
    };
    

module.exports = {auth,rec_auth};
