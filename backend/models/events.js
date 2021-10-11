const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  num_tickets: {
    type: Number,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  address: {
    long: { type: Number, require: true },
    lat: { type: Number, require: true },
  },
  images: {
    type: Array,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

let Event = mongoose.model('event', eventSchema);

module.exports = Event;
