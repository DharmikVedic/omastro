import Head from "next/head";

import React, { useEffect, useState } from "react";
import useCurrentAstrologer from "../components/context/profileContextvalue";
import { supabase } from "../components/supabase/supaclient";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { CalculatepricePer5min } from "../components/utils/calculateprice";
const btoa = require("btoa");

export default function CallingTesting() {
  const [cancelbutton, setcancelbutton] = useState(false);
  const [astrologer, setastrologer] = useState(null);
  const { profile } = useCurrentAstrologer();
  const router = useRouter();

  useEffect(() => {
    if (profile === null) {
      router.push("/talktoastrologer");
    } else {
      fetchdata(profile);
    }
  }, [profile]);

  const fetchdata = async (profiledata) => {
    const { data } = await supabase
      .from("currentHistory")
      .select("*")
      .eq("astrodb", profiledata.astrologer);

    if (data === null) {
      // router.push("/talktoastrologer");
    } else if (CalculatepricePer5min(data[0].price)) {
      alert("please recharge first");
    } else {
      setastrologer(data[0]);
      fetch(
        "https://08a844fjsd.execute-api.ap-south-1.amazonaws.com/default/agoratokenweb",
        {
          method: "POST",
          body: JSON.stringify({
            channel: btoa(data[0]?.astrologeremail),
            uid: profile.currentuser,
          }),
        }
      )
        .then((r) => r.json())
        .then((res) => {
          if (res.status === true) {
            startBasicCall(
              res.token,
              res.channel,
              res.uid,
              data[0]?.astrologerid
            );
          }
        });
    }
  };

  useEffect(async () => {
    const mySubscription = supabase
      .from("astrologerProfile")
      .on("*", (payload) => {
        alert("Change received!", payload);
        if (payload.new.currentQueue === false) {
          setTimeout(() => router.push("/talktoastrologer"), 1000);
        }
      })
      .subscribe();
    return () => supabase.removeSubscription(mySubscription);
  }, []);

  let rtc = {
    localAudioTrack: null,
    client: null,
  };

  async function startBasicCall(token, channel, uid, astroid) {
    let options = {
      // Pass your App ID here.
      appId: "805fca18065d4589872cee8ad99784b3",
      // Set the channel name.
      channel: channel,
      // Pass your temp token here.
      token: token,
      // Set the user ID.
      uid: uid,
    };

    const { data } = await supabase
      .from("currentHistory")
      .update({
        token: token,
        channel: channel,
        uid: uid,
      })
      .match({ astrologerid: astroid, status: true, id: profile.history });

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

      const update = await supabase
        .from("astrologerProfile")
        .update({
          currentQueue: true,
        })
        .eq("astrologerId", astroid);
      alert(update);

      // Create a local audio track from the audio sampled by a microphone.
      rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      // Publish the local audio tracks to the RTC channel.
      await rtc.client.publish([rtc.localAudioTrack]);

      let isAudioAutoplayFailed = false;
      AgoraRTC.onAudioAutoplayFailed = () => {
        if (isAudioAutoplayFailed) return;

        isAudioAutoplayFailed = true;
        const btn = document.createElement("button");
        btn.innerText = "Click me to resume the audio playback";
        btn.onClick = () => {
          isAudioAutoplayFailed = false;
          btn.remove();
        };
        document.body.append(btn);
      };
      setcancelbutton(true);

      console.log("publish success!");

      document.getElementById("cancel").onclick = async function () {
        rtc.localAudioTrack.close();
        setcancelbutton(false);

        await rtc.client.leave();

        const { data } = await supabase
          .from("astrologerProfile")
          .update({
            currentQueue: false,
          })
          .eq("astrologerId", astroid);
      };

      const update = await supabase
        .from("currentHistory")
        .update({
          callstatus: true,
        })
        .match({ uid: astrologer.uid, status: true, id: profile.history });
      // }
    };
  }

  return (
    <>
      <Head>
        <script
          defer
          src="https://download.agora.io/sdk/release/AgoraRTC_N-4.8.1.js"
        ></script>
      </Head>

      <div className="bg-green-50 h-screen fixed w-full px-5 z-50 py-20 ">
        <div className="flex flex-col gap-24 max-w-sm mx-auto ">
          <div className="shadow-xl bg-white rounded-lg flex flex-col gap-3 px-5 max-w-sm text-white py-6">
            <h5 className="capitalize items-center text-zinc-800 flex flex-col gap-5  pb-2 ">
              <img
                src="/imgs/user.png"
                className="w-[100px]"
                alt="Astrologer"
              />
              {astrologer?.astrologername ?? "test"}
            </h5>
          </div>
          <div className="flex flex-col justify-center ">
            <button
              id="cancel"
              className={`${
                cancelbutton
                  ? "opacity-100 visible  block"
                  : "opacity-0  invisible hidden"
              } rounded-md bg-red-500 w-full text-white font-bold p-3`}
            >
              Cancel
            </button>
            <button
              id="join"
              className={`
              ${
                !cancelbutton
                  ? "opacity-100 visible  "
                  : "opacity-0  invisible "
              }
              rounded-md mx-auto bg-green-400 w-full max-w-xs text-white font-bold  p-3`}
            >
              Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
