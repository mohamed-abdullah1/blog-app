const Post = require("../models/Post");
const {
  verifyToken,
  verifyTokenAndPremium,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const ObjectId = require("mongoose").Types.ObjectId;
const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndPremium, async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:postId", verifyTokenAndPremium, async (req, res) => {
  try {
    // console.log(req.user);
    // const updatedPost = await Post.findOneAndUpdate(
    //   { _id: req.params.postId, writer_id: req.user._id },
    //   {
    //     $set: req.body,
    //   },
    //   { new: true }
    // );
    // return res.status(200).json(updatedPost);
    let updatedPost = {};
    if (req.user.credential == 2) {
      updatedPost = await Post.findOneAndUpdate(
        { _id: req.params.postId },
        {
          $set: req.body,
        },
        { new: true }
      );
    } else {
      updatedPost = await Post.findOneAndUpdate(
        { _id: req.params.postId, writer_id: req.user._id },
        {
          $set: req.body,
        },
        { new: true }
      );
    }
    return res.status(200).json(updatedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE
router.delete("/:postId", verifyTokenAndPremium, async (req, res) => {
  try {
    if (req.user.credential == 2) {
      await Post.findOneAndDelete({
        _id: req.params.postId,
      });
    } else {
      await Post.findOneAndDelete({
        _id: req.params.postId,
        writer_id: req.user._id,
      });
    }
    return res.status(200).json("Post has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Post
router.get("/find/:postId", async (req, res) => {
  try {
    // for returning the post with sorted comments based on date
    // const post = await Post.aggregate([
    //   { $match: { _id: ObjectId(req.params.id) } },
    //   { $unwind: "$reviews" },
    //   { $sort: { "reviews.date": -1 } },
    //   { $group: { _id: "$_id", reviews: { $push: "$reviews" } } },
    // ]);
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Posts
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let Posts;

    if (qNew) {
      Posts = await Post.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      Posts = await Post.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      Posts = await Post.find();
    }
    res.status(200).json(Posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a comment
router.post("/:postId/comments", verifyToken, async (req, res) => {
  const post = await Post.findById(req.params.postId);
  try {
    console.log(req.body);
    post.comments.push(req.body);
    const updatedPost = await post.save();
    res.status(201).json(updatedPost);
  } catch (err) {
    res.status(404).json(err);
  }
});

// Add a like or dislike
router.post("/:postId/likes", verifyToken, async (req, res) => {
  const post = await Post.findById(req.params.postId);
  try {
    for (let i = 0; i < post.likes.length; i++) {
      if (post.likes[i].user_id === req.user._id) {
        if (post.likes[i].like === req.body.like) {
          //remove it
          post.likes.splice(i, 1);
          if (req.body.like === true) post.numberOfLikes--;
          else post.numberOfDisLikes--;
        } else {
          post.likes[i].like = req.body.like;
          if (req.body.like === true) {
            post.numberOfDisLikes--;
            post.numberOfLikes++;
          } else {
            post.numberOfDisLikes++;
            post.numberOfLikes--;
          }
        }
        const updatedPost = await post.save();
        return res.status(201).json(updatedPost);
      }
    }
    post.likes.push(req.body);
    if (req.body.like === true) post.numberOfLikes++;
    else post.numberOfDisLikes++;
    const updatedPost = await post.save();
    res.status(201).json(updatedPost);
  } catch (err) {
    return res.status(404).json(err);
  }
});
//check if a user made like or dislike
router.get("/:postId/status", verifyToken, async (req, res) => {
  const post = await Post.findById(req.params.postId);
  try {
    for (let i = 0; i < post.likes.length; i++) {
      if (post.likes[i].user_id === req.user._id) {
        if (post.likes[i].like) return res.status(201).json({ status: "like" });
        else return res.status(201).json({ status: "dislike" });
      }
    }
    return res.status(201).json({ status: "none" });
  } catch (err) {
    return res.status(404).json(err);
  }
});

module.exports = router;
