const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemas = new Schema({
    photoImg: {
        type: String,
        required: true,
    },
    nameOfTheShow: {
        type: String,
        required: true,
    },
    raitingOfTheShow: {
        type: String,
        required: true,
    },
    theId: {
        type: String,
        required: true,
    },
    theDatOfTheShow: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    IdOfTheShow: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Show",schemas)