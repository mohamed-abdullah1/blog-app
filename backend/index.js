const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");
const pinnedRoute = require("./routes/pinned");
const stripeRoute = require("./routes/stripe");
const newsRouter = require("./routes/news");

const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then( console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", categoryRoute);
app.use("/api/pinned", pinnedRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/news", newsRouter);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running! On ${process.env.PORT}`);
});
