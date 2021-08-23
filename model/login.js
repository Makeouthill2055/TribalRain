const mongoose = require("mongoose")
const bibhav = mongoose.Schema;
const manzil = new bibhav ({
    email: {
        type: String
    },
    password: {
        type: String
    }

})
module.exports = mongoose.model("login", manzil)