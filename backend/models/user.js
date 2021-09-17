const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cpf: {
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

let Users = mongoose.model('User', userSchema)

module.exports = Users