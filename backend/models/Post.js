const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  user_id: { type: String },
  avatar: { type: String },
  username: { type: String },
  comment: { type: String },
  date: { type: Date, default: Date.now },
});

const LikeSchema = mongoose.Schema({
  user_id: { type: String },
  like: { type: Boolean },
});

const PostSchema = new mongoose.Schema(
  {
    writer_id: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    reviews: [CommentSchema],
    likes: [LikeSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
