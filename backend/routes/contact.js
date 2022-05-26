const router = require("express").Router();
const nodemailer = require("nodemailer");

const { verifyTokenAndPremium, verifyTokenAndAdmin } = require("./verifyToken");

router.post("/us", verifyTokenAndPremium, async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL, // this should be YOUR GMAIL account
      pass: process.env.ADMIN_PASS, // this should be your password
    },
  });

  var textBody = `FROM: ${req.body.name} EMAIL: ${req.body.email} MESSAGE: ${req.body.message}`;
  var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${req.body.name} <a href="mailto:${req.body.email}">${req.body.email}</a></p><p>${req.body.message}</p>`;
  var mail = {
    from: req.body.email, // sender address
    to: process.env.ADMIN_EMAIL, // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
    subject: req.body.subject, // Subject line
    text: textBody,
    html: htmlBody,
  };

  // send mail with defined transport object
  transporter.sendMail(mail, function (err, info) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(info.messageId);
    }
  });
});

router.post("/admin", async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL, // this should be YOUR GMAIL account
      pass: process.env.ADMIN_PASS, // this should be your password
    },
  });

  var textBody = `FROM: ${req.body.name} EMAIL: ${process.env.ADMIN_EMAIL} MESSAGE: ${req.body.message}`;
  var htmlBody = `<h2>Mail From Blog's admin</h2><p>${req.body.message}</p>`;
  var mail = {
    from: process.env.ADMIN_EMAIL, // sender address
    to: req.body.email, // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
    subject: req.body.subject, // Subject line
    text: textBody,
    html: htmlBody,
  };

  // send mail with defined transport object
  transporter.sendMail(mail, function (err, info) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(info.messageId);
    }
  });
});
module.exports = router;
