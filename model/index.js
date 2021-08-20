const mongoose = require("mongoose")

const schema = mongoose.Schema;

const indexSchema = new schema ({
    email: {
        type: String
    },
    message: {
        type: String
    }
})
module.exports = mongoose.model("Index", indexSchema)