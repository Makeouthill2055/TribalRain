const mongoose = require("mongoose")

const alish = mongoose.Schema;

const indexSchema = new alish ({
    image: {
        type: String
    },
    title: {
        type: String
    },
    details: {
        type: String
    }

})
module.exports = mongoose.model("news", indexSchema)