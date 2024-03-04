const mongoose = require("mongoose");


const connection = mongoose.connect(`mongodb+srv://abhayera2013:Abhay123@cluster0.gdyvizs.mongodb.net/Final_Evaluation`)

const userSchema = mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
    phone_number:{type:String , required:true},
    department:{type:String , required:true}
})


const Products_Schema = mongoose.Schema({
    title:{type:String , required:true},
    body:{type:String , required:true},
    category:{type:String , required:true , enum:["parking", "covid", "maintenance"]},
    date:{type:String , required:true}
})

const User_module = mongoose.model("user_data" , userSchema);
const Product_module = mongoose.model("products_data" , Products_Schema);

module.exports = {connection , User_module , Product_module};