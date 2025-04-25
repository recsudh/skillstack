const mongoose = require("mongoose")

async function mongo(){
    try{
        const connect= await mongoose.connect(process.env.MONGO_URL)
        if(connect){
            console.log(`mongo Db connected ${mongoose.connection.port}`);
        }
    }catch(e){
        console.log(e.message);
    }
}

module.exports= mongo