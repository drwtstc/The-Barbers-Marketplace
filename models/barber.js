const mongoose = require('mongoose')

const Schema = mongoose.Schema

const barberSchema = new Schema({
    greeting:{type: String},
    name:{type: String, required: true},
    phone:{type: String, required: true},
    rates:{type: String},
    avails:{type: String},
    expMos:{type: Number},
    expYrs:{type: Number}
},
{timestamps: true});

module.exports = mongoose.model('Barber', barberSchema)

