const mongoose = require('mongoose')
const passport = require('passport-local-mongoose')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cnpj: {
        type: String,
        require: true
    },/*
    password: {
        type: String,
        require: true
    },*/
    role: {
        type: Number,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

companySchema.plugin(passport)
let Company = mongoose.model('company', companySchema)
module.exports = Company