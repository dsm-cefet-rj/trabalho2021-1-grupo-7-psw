const mongoose = require('mongoose')
const {ObjectId} = require('mongoose').SchemaTypes
const buySchema = new mongoose.Schema({
   userId:{
       type: ObjectId,
       ref: 'User',
       required: true,
   },
   eventId:{
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