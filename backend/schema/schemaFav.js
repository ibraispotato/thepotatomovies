const mongoose = require('mongoose')
const Schema = mongoose.Schema


const schema = new Schema({
    photoImg: {
        type: String,
        required: true,
    },
    nameOfTheMovie: {
        type: String,
        required: true,
    },
    raitingOfTheMovie: {
        type: String,
        required: true,
    },
    theId: {
        type: String,
        required: true,
    },
    theDatOfTheMovie: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    IdOfTheMovie: {
        type: String,
        required: true
    }


})
module.exports = mongoose.model("fav", schema)