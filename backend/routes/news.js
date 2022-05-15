const request = require("request");
const https = require("https");

const router = require("express").Router();

router.post("/subscribe", (req, res) => {
  const email = req.body.email;
  const mcData = {
    members: [
      {
        email_address: email,
        status: "subscribed",
      },
    ],
  };
  mcDataPost = JSON.stringify(mcData);
  const url = process.env.NEWS_URL;
  const options = {
    method: "POST",
    auth: process.env.NEWS_KEY,
  };
  if (email) {
    const request = https.request(url, options, (response) => {
      response.on("data", function (data) {
        data = JSON.parse(data);
        if (data.error_count) {
          return res.status(500).send({ message: data.errors[0].error });
        } else {
          return res.status(200).send({ message: "success" });
        }
      });
    });
    request.write(mcDataPost);
    request.end();
  } else {
    return res.status(404).send({ message: "Failed" });
  }
});

module.exports = router;
