const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({


    paypal: {
        type: String,
        required: true,
    },
    binance: {
        type: String,
        required: true,
    },

    connection1: { type: [String] },
    connection2: { type: [String] },
    connection3: { type: [String] }








})



const AdminModel = mongoose.model("admin", AdminSchema)
module.exports = AdminModel