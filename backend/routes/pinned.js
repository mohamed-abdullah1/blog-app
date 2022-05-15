const router = require("express").Router();
const Favorite = require("../models/Favorite");
const Product = require("../models/Product");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// CREATE Favorite, any user can create the Favorite
router.post("/", async (req, res) => {
  const newFavorite = new Favorite(req.body);

  try {
    const savedFavorite = await newFavorite.save();

    return res.status(200).json(savedFavorite);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// UPDATE, user can change its own Favorite
// put new version
router.put("/find/:id", async (req, res) => {
  try {
    console.log("in try of update fav", req.body);
    const updatedFavorite = await Favorite.findOneAndUpdate(
      { userId: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );

    return res.status(200).json(updatedFavorite);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Favorite.deleteOne({ userId: req.params.id });

    return res.status(200).json("Favorite Deleted successfully");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET USER Favorite

router.get("/find/:id", async (req, res) => {
  try {
    const favorite = await Favorite.findOne({ userId: req.params.id });
    return res.status(200).json(favorite);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/*
router.get("/delete-from-fav/:id", verifyTokenAndAuthorization, async (req,res)=>{

    const userId = req.params.id;
    const productID = req.body.productID;
      try{
        const favorite = await Favorite.findOne({userId:userId }); 
           
        let idx = favorite.products.findIndex(p => p.productId === productID);
        if(idx > -1){
          favorite.products.splice(idx,1);
              
         await favorite.save();
       }else{
           return res.status(404).json("No product with this id in the favorite cart");
       }
            
      }catch(err){
          return res.status(500).json(err);
      }
   
   } );


   router.get("/add-to-fav/:id",verifyTokenAndAuthorization,async (req,res)=>{
    const userId = req.params.id;
    const productID= req.body.productID;
 
     try{
        const favorite = await Favorite.findOne({userId:userId});
 
        if(favorite){
         let itemIndex = favorite.products.findIndex(p => p.productId === productID);
          // Check if product exists or not
          if(itemIndex > -1)
          {
            return res.status(201).json("already exists");
           
          }else{
            favorite.products.push({ productID: productID});
             
          }
          
      await favorite.save();
      return res.status(201).send(favorite);
        }else{

 
         const newFavorite = await Favorite.create({
             userId,
             products: [{ productID : productID }]
         });
              
         return res.status(201).send(newFavorite);
        }
       
     }catch(err){
         return res.status(500).json(err);
     }
 
 });
 



*/

router.get("/", async (req, res) => {
  try {
    const favorites = await Favorite.find();
    return res.status(200).json(favorites);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
