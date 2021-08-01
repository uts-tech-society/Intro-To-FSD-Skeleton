const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fortuneSchema = new Schema({
  fortuneName: {
    type: String,
    required: true,
  },
});

const Fortune = mongoose.model("Fortune", fortuneSchema);

module.exports = Fortune;
