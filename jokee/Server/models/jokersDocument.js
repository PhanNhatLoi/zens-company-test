const mongoose = require("mongoose");

const jokersDocument = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    like: {
      type: Number,
      default: 0,
    },
    dislike: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("jokersDocument", jokersDocument);
