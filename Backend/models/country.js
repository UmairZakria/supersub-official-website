const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({


    country: {
        type: String,
        required: true,
    },

    connection1: { type: [String] },
    connection2: { type: [String] },
    connection3: { type: [String] }








})



const CountryModel = mongoose.model("country", CountrySchema)
module.exports = CountryModel