const mongoose = require('mongoose')

const AdmincontactSchema = new mongoose.Schema({

    email:{type:String},

    phonenumber:{type:String}








})



const AdmincontactModel = mongoose.model("admincontact", AdmincontactSchema)
module.exports = AdmincontactModel