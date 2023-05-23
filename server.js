const express = require("express")
const app = express()
const connectDB = require('./db/conn')
require("dotenv").config()
const product_route = require("./routes/products")

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("hiii")
})

//middelware or set to router   
app.use("/api/products", product_route)

const start= async()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        app.listen(PORT,()=>{
            console.log(`Server is running on port no ${PORT}`);
        })
    }
    catch(error){
        console.log(error)
    }
}
start();
