const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "event",
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

let Favorite = mongoose.model("favorite", favoriteSchema);

module.exports = Favorite;
