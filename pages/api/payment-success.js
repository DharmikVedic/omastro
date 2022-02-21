const crypto = require("crypto");

export default function handlePaymentSuccess(req, res) {
  if (req.method === "POST") {
    try {
      const {
        orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
      } = req.body;

      console.log(req.body);

      const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);

      shasum.update(`${razorpayPaymentId}|${orderCreationId}`);

      const digest = shasum.digest("hex");
      console.log("sig received ", razorpaySignature);
      console.log("sig generated ", digest);
      // comaparing our digest with the actual signature
      if (digest !== razorpaySignature) {
        return res
          .status(400)
          .json({ status: false, msg: "Transaction not valid!" });
      } else {
        res.json({
          status: true,
          msg: "success",
          orderId: razorpayOrderId,
          paymentId: razorpayPaymentId,
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
