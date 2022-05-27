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
router.put("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  const pinned = await Pinned.findOne({userId:req.params.id});

  try {
    let flag=0;
    for (let i = 0; i < pinned.posts.length; i++) {
     
        if (pinned.posts[i].postId === req.body.postId) {
          //remove it
          flag=1;
           pinned.posts.splice(i, 1);

        }
      }
      if(flag===0){
        pinned.posts.push({postId:req.body.postId});
      }

        const updatedPinned = await pinned.save();
        return res.status(201).json(updatedPinned);
      
  } catch (err) {
    return res.status(404).json(err);
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

