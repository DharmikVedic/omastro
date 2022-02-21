const Razorpay = require("razorpay");

export default async function handler(req, res) {
  if (req.method === "POST") {
    var razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
  }

  const { amount } = JSON.stringify(req.body);

  const payment_capture = 1;
//   const amount = 1;
  const currency = "INR";

  const options = {
    amount: (100 * 100).toString(),
    currency,
    receipt: "receipt_order_74394",
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.status(200).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    res.status(400).json(err);
  }
}
