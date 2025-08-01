const mongoose = require('mongoose')

const connectionSchema = new mongoose.Schema({

    uae: {
        connection1: { type: [String] },
        connection2: { type: [String] },
        connection3: { type: [String] }
    },
    qatar: {
        connection1: { type: [String] },
        connection2: { type: [String] },
        connection3: { type: [String] }
    },
    malaysia: {
        connection1: { type: [String] },
        connection2: { type: [String] },
        connection3: { type: [String] }
    },
})

const connectionModel = mongoose.model("connection", connectionSchema)
module.exports = connectionModel