const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
