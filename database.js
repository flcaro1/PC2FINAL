const mongoose = require("mongoose");
const { Schema } = require("mongoose");

mongoose
    .connect("mongodb://dbp2/mydb")
    .then(() => console.log(""))
    .catch((err) => console.log(err));



const schema = new Schema({
    id: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    has: {
        type: String,
    },
});

module.exports = mongoose.model("user", schema);