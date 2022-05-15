const router = require("express").Router();
const Pinned = require("../models/Pinned");
const Post = require("../models/Post");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyTokenAndPremium
} = require("./verifyToken");

// creating pinned list 
router.post("/",verifyToken, async (req, res) => {
  const newPinned = new pinned(req.body);

  try {
    const savedPinned = await newPinned.save();

    return res.status(200).json(savedPinned);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// UPDATE, user can change its own pinned list
// put new version
router.put("/find/:id",verifyTokenAndAuthorization, async (req, res) => {
  try {
    console.log("in try of update fav", req.body);
    const updatedPinned = await Pinned.findOneAndUpdate(
      { userId: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );

    return res.status(200).json(updatedPinned);
  } catch (err) {
    return res.status(500).json(err);
  }
});

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

router.get("/find/:id",verifyTokenAndAuthorization, async (req, res) => {
  try {
    const pinned = await pinned.findOne({ userId: req.params.id });
    return res.status(200).json(pinned);
  } catch (err) {
    return res.status(500).json(err);
  }
});
//get all pinned post lists of all users
router.get("/",verifyTokenAndAdmin, async (req, res) => {
  try {
    const pinned = await pinned.find();
    return res.status(200).json(pinned);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

