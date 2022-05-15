const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    credential: { type: string, required: true },
    avater: { type: string },
    job: { type: string },
    interests: { type: string },
    facebook_account: { type: string },
    twitter_account: { type: string },
    linkedin_account: { type: string },
    youtube_account: { type: string },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
