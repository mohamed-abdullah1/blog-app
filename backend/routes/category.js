const router = require("express").Router();
const Category = require("../models/Category");
const Favorite = require("../models/Category");


const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


router.post("/",verifyTokenAndAdmin, async (req, res) => {
  const newCategory = new Category(req.body);

  try {
    const savedCategory = await newCategory.save();

    return res.status(200).json(savedCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
});



router.delete("/:name", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Category.deleteOne({ name: req.params.name });

    return res.status(200).json("Category Deleted successfully");
  } catch (err) {
    return res.status(500).json(err);
  }
});




router.get("/", async (req, res) => {
  try {
    const category = await Category.find();
    return res.status(200).json(category);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
