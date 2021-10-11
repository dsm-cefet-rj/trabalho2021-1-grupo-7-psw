const mongoose = require('mongoose')
const {ObjectId} = require('mongoose').SchemaTypes
const buySchema = new mongoose.Schema({
   user:{
       type: ObjectId,
       ref: 'User',
       required: true,
   },
   company:{
    type: ObjectId,
    ref: 'User',
    required: true,
    },
   event:{
       type: ObjectId,
       ref: 'event',
       required: true,
   },
   created_at:{
       type: Date,
       default: Date.now()
   }
})

const Buy = mongoose.model('Buy', buySchema)

module.exports = Buy