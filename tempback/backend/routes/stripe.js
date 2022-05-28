const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51KoVCxCaA7JCkhT1EROkrj1mQZ15tKPycrVgn9CyyV2hCJC2HTd2zYHzrENXhdkysl1Ce5BdHhYItg2ZJPp3eNnk00UkX7Ezv2"
);

router.post("/payment", (req, res) => {
  const { token, amount } = req.body;
  console.log(token, amount);

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create({
        amount: amount * 100,
        currency: "usd",
        customer: customer.id,
      });
    })
    .then((response) =>
      res.status(200).json({
        res: response,
        address: {
          address_city: token.card.address_city,
          address_country: token.card.address_country,
          address_line1: token.card.address_line1,
        },
      })
    )
    .catch((err) => res.status(500).send(err));

  // try {
  //   const { amount, source, receipt_email } = req.body

  //   const charge = await stripe.charges.create({
  //     amount,
  //     currency: 'usd',
  //     source,
  //     receipt_email
  //   })

  //   if (!charge) throw new Error('charge unsuccessful')

  //   res.status(200).json({
  //     charge,
  //     message: 'charge posted successfully'
  //   })
  // } catch (error) {
  //   res.status(500).json({
  //     message: error.message
  //   })
  // }
});

module.exports = router;
