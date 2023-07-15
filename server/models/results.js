const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  test_result: {
    type: [Number],
    require: true,
  },
  result: {
    type: Boolean,
    required: true,
  },
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
