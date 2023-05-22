require("dotenv").config()
const connectDB = require("./db/conn")
const Product = require("./models/schema")
const productJSON = require('./product.json')
const start =async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        await Product.create(productJSON)
        console.log("Success");
    }
    catch(e){
        console.log(e);
    }
}

start()