const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patronSchema =  new Schema({
    name:{},
    phone:{},
    prefDay:{},
    prefTime: {},
});

module.exports = mongoose.model('Patron', patronSchema)