const getAllProducts = async(req,res)=>{
    res.status(200).json({message:"I am in getAllProduxts"})
}
const getAllProductsTesting = async(req,res)=>{
    res.status(200).json({message:"I am in getAllProduxtsTesting"})
}
module.exports = {getAllProducts,getAllProductsTesting}