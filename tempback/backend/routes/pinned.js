const router = require("express").Router();
const Pinned = require("../models/Pinned");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyTokenAndPremium,
} = require("./verifyToken");

// creating pinned list
router.post("/", verifyToken, async (req, res) => {
  const newPinned = new Pinned(req.body);
  console.log("newPinnedxx", newPinned);
  try {
    const savedPinned = await newPinned.save();
    console.log("savedPinnedxx", savedPinned);

    return res.status(200).json(savedPinned);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// UPDATE, user can change its own pinned list
router.put("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  const pinned = await Pinned.findOne({ userId: req.params.id });

  try {
    let flag = 0;
    for (let i = 0; i < pinned.posts.length; i++) {
      if (pinned.posts[i].postId === req.body.postId) {
        //remove it
        flag = 1;
        pinned.posts.splice(i, 1);
      }
    }
    if (flag === 0) {
      pinned.posts.push({ postId: req.body.postId });
    }

    const updatedPinned = await pinned.save();
    return res.status(201).json(updatedPinned);
  } catch (err) {
    return res.status(404).json(err);
  }
});
// router.delete("/find/:id", async (req, res) => {
//   try {
//     let updatedPinned = await Pinned.findOne({ userId: req.params.id });
//     const updatedPinnedPost = await PinnedPost.findOneAndDelete({
//       postId: req.body.postId,
//     });
//     console.log("req.body", req.body);
//     updatedPinned.posts = updatedPinned.posts.filter(
//       (item) => item.postId !== req.body.postId
//     );
//     console.log("xxxxxxx", updatedPinned.posts);
//     const updated = await Pinned.findOneAndUpdate(
//       { userId: req.params.id },
//       {
//         $set: updatedPinned,
//       },
//       { new: true }
//     );

//     return res.status(200).json(updated);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });
//DELETE the pinned list
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Favorite.deleteOne({ userId: req.params.id });

    return res.status(200).json("Favorite Deleted successfully");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET USER pinned posts
router.get("/:postId/status", verifyToken, async (req, res) => {
  const pinned = await Pinned.findOne({ userId: req.user._id });
  try {
    let flag = 0;
    for (let i = 0; i < pinned.posts.length; i++) {
      if (pinned.posts[i].postId === req.params.postId) {
        flag = 1;
        return res.status(201).json({ status: "true" });
      }
    }
    flag === 0 && res.status(201).json({ status: "false" });
    // if (flag === 0) return res.status(201).json({ status: "false" });
  } catch (err) {
    return res.status(404).json(err);
  }
});

router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const pinned = await Pinned.findOne({ userId: req.params.id });
    return res.status(200).json(pinned);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//get all pinned post lists of all users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const pinned = await pinned.find();
    return res.status(200).json(pinned);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
