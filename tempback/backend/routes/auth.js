const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//const refreshdb = require("../models/refresh");
//REGISTER
router.post("/register", async (req, res) => {
  req.body.password = CryptoJS.AES.encrypt(
    req.body.password,
    process.env.PASS_SEC
  ).toString();
  const newUser = new User(req.body);
  console.log(res.body);
  try {
    const savedUser = await newUser.save();
    let { password, ...user_data } = savedUser._doc;
    const access_token = jwt.sign(
      { password, ...user_data },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    return res
      .status(201)
      .json({ ["accessToken"]: access_token, ...user_data });
  } catch (err) {
    return res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("the user not fount");
    }

    const hashedpassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    ).toString(CryptoJS.enc.Utf8);

    if (hashedpassword !== req.body.password) {
      return res.status(404).json("wrong password");
    }

    let { password, ...user_data } = user._doc;
    const access_token = jwt.sign(
      { password, ...user_data },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    // const refresh_token = jwt.sign(
    //   { password, ...user_data },
    //   process.env.jwt_refresh
    // );
    //const tok = new refreshdb({ token: refresh_token });
    //const savedrefresh = await tok.save();
    user_data = {
      ...user_data,
      ["accessToken"]: access_token,
      // ["refreshToken"]: refresh_token,
    };
    return res.status(200).json(user_data);
  } catch (err) {
    return res.status(404).json(err);
  }
});

module.exports = router;
