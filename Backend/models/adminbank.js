const mongoose = require('mongoose')

const AdminbankSchema = new mongoose.Schema({

    banks: [
        {
            bname: { type: String },
            accountno: { type: String },
            accountholder: { type: String },
            iban: { type: String },
            country: { type: String }
        }
    ]
})
const AdminbankModel = mongoose.model("adminbank", AdminbankSchema)
module.exports = AdminbankModel