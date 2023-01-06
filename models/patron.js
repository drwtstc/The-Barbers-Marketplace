const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patronSchema =  new Schema({
    name:{type: String, required: true},
    phone:{type: String, required: true},
    prefDay:{type: String},
    prefTime: {type: String},
});

module.exports = mongoose.model('Patron', patronSchema)