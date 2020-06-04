const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const RoomListSchema = new Schema({
  room: {
    type: String,
    required: true,
  },
});
const RoomList = mongoose.model("RoomList", RoomListSchema);
module.exports = RoomList;
