const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        
        type: String,
        unique: true,  

        required: true,

    },
    country :{
        type:String
    },


    password: {
        type: String,
        required: true,
    },
    
    plan: {
        type: String,

    },




})


//product name , product stock, product images, rating ,discription, product price 

const UserModel = mongoose.model("rigister", UserSchema)
module.exports = UserModel