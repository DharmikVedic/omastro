import React from "react";
import useUserData from "../components/context/logincontextvalue";

import Loader from "../components/loader";
import { initializeRazorpay } from "../components/utils/razorpay";

export default function Testing() {
  const { user } = useUserData();

  async function displayRazorpay() {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await fetch("/api/razorpay", {
      method: "POST",
    });
    const r = await result.json();

    if (!result) {
      alert("Server error. Are you online?");
      return;
    } else {
      // Getting the order details back
      const { amount, id: order_id, currency } = r;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_ID, // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: user.user_metadata.name,
        description: "Test Transaction",
        order_id: order_id,
        handler: async function (response) {
          const data1 = {
            email: user.email,
            amount: parseInt(amount) / 100,
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          const result = await fetch("/api/payment-success", {
            method: "POST",
            body: JSON.stringify(data1),
          });
          const res = await result.json();

          console.log(res);
        },
        prefill: {
          name: user.user_metadata.name,
          email: user.email,
          contact: user.user_metadata.mobilenumber,
        },
        theme: {
          color: "#ef4444",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  }

  return (
    <div className="py-40 px-10">
      <button onClick={displayRazorpay}>Play</button>
      <button id="my-link" onClick={() => musicPlayers.current?.pause()}>
        Pause
      </button>
      <Loader />
    </div>
  );
}
