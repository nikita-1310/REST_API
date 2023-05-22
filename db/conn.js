const mongoose = require("mongoose")


const connectDB = (url)=>{
    console.log("Connected to database");
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}

module.exports = connectDB