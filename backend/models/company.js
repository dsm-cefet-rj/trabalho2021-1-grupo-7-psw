const mongoose = require('mongoose')

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
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: Number,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

let Company = mongoose.model('company', companySchema)

module.exports = Company