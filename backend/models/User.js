const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    credential: { type: Number, required: true,default:0 },
    avatar: { type: String },
    job: { type: String },
    interests: { type: Array },
    facebook_account: { type: String },
    twitter_account: { type: String },
    linkedin_account: { type: String },
    youtube_account: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
