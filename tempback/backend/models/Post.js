const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  user_id: { type: String, required: true },
  avatar: { type: String, required: true },
  username: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const LikeSchema = mongoose.Schema({
  user_id: { type: String, required: true },
  like: { type: Boolean, required: true }, // true means like, false means dislike
});

const PostSchema = new mongoose.Schema(
  {
    writer_id: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    comments: [CommentSchema],
    likes: [LikeSchema],
    numberOfLikes: { type: Number, default: 0 },
    numberOfDisLikes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
