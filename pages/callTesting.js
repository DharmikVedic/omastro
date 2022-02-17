// import "../components/AgoraRTC-N-4.2.1";
// const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

export default function Home() {
  // useEffect(() => {
  //   handlupdate();
  // }, []);

  const handlupdate = () => {
    fetch(
      " https://08a844fjsd.execute-api.ap-south-1.amazonaws.com/default/agoratokenweb",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channel: "test", uid: 123 }),
      }
    )
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        startBasicCall(
          "006805fca18065d4589872cee8ad99784b3IAA1hyO8DvzEhaO5mKucyEJHb9Tus5xLSHY5RWjGR4s0WAx+f9gAAAAAIgDzxwcSYJIOYgQAAQBgkg5iAgBgkg5iAwBgkg5iBABgkg5i",
          123,
          "test"
        );
      })
      .catch((err) => console.log(err));
  };

  let rtc = {
    localAudioTrack: null,
    client: null,
  };

  async function startBasicCall(token, uid, channel) {
    let options = {
      // Pass your App ID here.
      appId: "805fca18065d4589872cee8ad99784b3",
      // Set the channel name.
      channel: channel,
      // Pass your temp token here.
      token: null,
      // Set the user ID.
      uid: null,
    };

    // Create an AgoraRTCClient object.
    rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    // Listen for the "user-published" event, from which you can get an AgoraRTCRemoteUser object.
    rtc.client.on("user-published", async (user, mediaType) => {
      // Subscribe to the remote user when the SDK triggers the "user-published" event
      await rtc.client.subscribe(user, mediaType);
      console.log("subscribe success");

      // If the remote user publishes an audio track.
      if (mediaType === "audio") {
        // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
        const remoteAudioTrack = user.audioTrack;
        // Play the remote audio track.
        remoteAudioTrack.play();
      }

      // Listen for the "user-unpublished" event
      rtc.client.on("user-unpublished", async (user) => {
        // Unsubscribe from the tracks of the remote user.
        await rtc.client.unsubscribe(user);
      });
    });

    document.getElementById("join").onclick = async function () {
      // Join an RTC channel.
      await rtc.client.join(
        options.appId,
        options.channel,
        options.token,
        options.uid
      );
      // Create a local audio track from the audio sampled by a microphone.
      rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      // Publish the local audio tracks to the RTC channel.
      await rtc.client.publish([rtc.localAudioTrack]);

      console.log("publish success!");

      document.getElementById("cancel").onclick = async function () {
        // Destroy the local audio track.
        rtc.localAudioTrack.close();

        // Leave the channel.
        await rtc.client.leave();
      };
    };
  }

  // const join =

  return (
    <>
      <script src="https://download.agora.io/sdk/release/AgoraRTC_N-4.8.1.js"></script>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1> hello world</h1>

        <button
          className="bg-red-400 p-3.5 text-zinc-800 w-40 rounded-md mt-5"
          onClick={() =>
            startBasicCall(
              "006805fca18065d4589872cee8ad99784b3IAC9p8Aq64Xagg79wQs0BC7sjpkIyFWvALeoWmt2zumtAQx+f9gAAAAAIgAWylBUqVwPYgQAAQCoXA9iAgCoXA9iAwCoXA9iBACoXA9i",
              123,
              "test"
            )
          }
        >
          Start
        </button>

        <button
          id="join"
          className="bg-indigo-500 p-3.5 text-white w-40 rounded-md mt-5"
        >
          join
        </button>

        <button
          id="cancel"
          className="bg-indigo-500 p-3.5 text-white w-40 rounded-md mt-5"
        >
          cancel
        </button>
      </div>
    </>
  );
}

// const [sig, setsig] = useState({ token: "", order: "" });
//   const handle = () => {
//     fetch("/api/testing", {
//       method: "POST",
//       body: JSON.stringify({ name: "dharmik" }),
//     });
//   };

//   function onScriptLoad(token, order) {
//     var config = {
//       root: "",
//       flow: "DEFAULT",
//       data: {
//         orderId: order /* update order id */,
//         token: token /* update token value */,
//         tokenType: "TXN_TOKEN",
//         amount: 10 /* update amount */,
//       },
//       handler: {
//         notifyMerchant: function (eventName, data) {
//           console.log("notifyMerchant handler function called");
//           console.log("eventName => ", eventName);
//           console.log("data => ", data);
//         },
//       },
//     };
//     if (typeof window !== "undefined") {
//       if (window.Paytm && window.Paytm.CheckoutJS) {
//         //initialze configuration using init method
//         console.log(config);
//         window.Paytm.CheckoutJS.init(config)
//           .then(function onSuccess() {
//             // after successfully updating configuration, invoke JS Checkout
//             window.Paytm.CheckoutJS.invoke();
//           })
//           .catch(function onError(error) {
//             console.log("error => ", error);
//           });
//       }
//     }
//   }

//   // const handle = () => {
//   //   fetch(
//   //     "https://ewwb8fmca0.execute-api.ap-south-1.amazonaws.com/default/vedicrishilambda",
//   //     {
//   //       method: "POST",
//   //       body: JSON.stringify({
//   //         operation: "paytm_token",
//   //         amount: 10,
//   //         order_id: "Order_15",
//   //         mode: "TEST",
//   //       }),
//   //     }
//   //   )
//   //     .then((res) => res.json())
//   //     .then((r) => {
//   //       console.log(r);
//   //       onScriptLoad(r.response.token, r.response.order_id);
//   //       setsig({ token: r.response.token, order: r.response.order_id });
//   //     });
//   // };
