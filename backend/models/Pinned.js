const mongoose = require("mongoose");

const PinnedSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    posts: [
      {
        postId: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("PinnedSchema", PinnedSchema);
