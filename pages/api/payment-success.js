import { supabase } from "../../components/supabase/supaclient";

const crypto = require("crypto");

export default async function handlePaymentSuccess(req, res) {
  if (req.method === "POST") {
    try {
      const {
        orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
        email,
        amount,
      } = JSON.parse(req.body);


      const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);

      shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

      const digest = shasum.digest("hex");
      console.log("sig received ", razorpaySignature);

      const pushData = async () => {
        const { data } = await supabase
          .from("userDetail")
          .select("*")
          .eq("email", email);

        if (data !== null) {
          data[0].transactionhistory.push({
            status: true,
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
            amount: amount,
          });

          const update = await supabase
            .from("userDetail")
            .update([
              {
                totalamount: amount + data[0].totalamount,
                transactionhistory: data[0].transactionhistory,
              },
            ])
            .eq("email", email);
        }
      };

      console.log("sig generated ", digest);
      // comaparing our digest with the actual signature
      if (digest === razorpaySignature) {
        pushData();
        return res.status(200).json({
          status: true,
          msg: "success",
          orderId: razorpayOrderId,
          paymentId: razorpayPaymentId,
          amount: amount,
        });
      } else {
        return res.status(400).json({
          status: false,
          msg: "Transaction failed",
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
