const jwt = require("jsonwebtoken");


const auth = async function (req, res, next) {
try{ 
    console.log(req.headers);
    const token = req.headers.cookie.replace("jwt=","");
    console.log(token);
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

module.exports = auth;
