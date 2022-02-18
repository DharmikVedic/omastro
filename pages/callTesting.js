import Head from "next/head";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useCurrentAstrologer from "../components/context/profileContextvalue";
import { supabase } from "../components/supabase/supaclient";
import "react-toastify/dist/ReactToastify.css";

export default function CallingUi() {
  const [canselbutton, setcancelbutton] = useState(false);

  const [astrologer, setastrologer] = useState(null);

  const { profile } = useCurrentAstrologer();
  const router = useRouter();
  const notify = () =>
    toast.error("Astrologer is offline please try agnain later", {
      theme: "colored",
    });

  useEffect(async () => {
    const { data } = await supabase
      .from("astrologerProfile")
      .select("id, name,isActive")
      .eq("id", profile.astrologer);

    if (data !== null) {
      // if (!data[0].isActive) {
      //   notify();
      // }
      setastrologer(data[0]);
    }
    setTimeout(() => {
      startBasicCall(
        "006805fca18065d4589872cee8ad99784b3IABiW3bCRtsdOwrbfV3Q/KqdzBiPz9gKTroyYMkNNHtkCgx+f9gAAAAAIgDzxwcSddkQYgQAAQB02RBiAgB02RBiAwB02RBiBAB02RBi",
        123,
        "test"
      );
    }, 1000);
  }, [profile]);

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
      token: token,
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
        alert("audio");
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
      // if (astrologer?.isActive === false) {
      //   notify();
      // } else {
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
      const { data } = await supabase
        .from("astrologerProfile")
        .update({
          currentQueue: true,
        })
        .eq("id", profile.astrologer);

      console.log("publish success!");

      document.getElementById("cancel").onclick = async function () {
        rtc.localAudioTrack.close();

        await rtc.client.leave();

        const { data } = await supabase
          .from("astrologerProfile")
          .update({
            currentQueue: false,
          })
          .eq("id", profile.astrologer);
        router.replace("/");
      };
      // }
    };
  }
  return (
    <>
      <Head>
        <script
          async
          src="https://download.agora.io/sdk/release/AgoraRTC_N-4.8.1.js"
        ></script>
      </Head>
      <ToastContainer />

      <div className="bg-green-50 h-screen fixed w-full z-50 py-20 ">
        <div className="flex flex-col gap-24 max-w-sm mx-auto ">
          <div className="shadow-xl bg-white rounded-lg flex flex-col gap-3 px-5 max-w-sm text-white py-6">
            <h5 className="capitalize items-center text-zinc-800 flex flex-col gap-5  pb-2 ">
              <img
                src="/imgs/user.png"
                className="w-[100px]"
                alt="Astrologer"
              />
              {astrologer?.name ?? "test"}
            </h5>
          </div>
          <div className="flex gap-10 ">
            {canselbutton ? (
              <button
                id="cancel"
                className="rounded-md bg-red-500 w-full text-white font-bold p-3"
              >
                Cancel
              </button>
            ) : (
              <button
                id="join"
                className="rounded-md bg-green-400 w-full text-white font-bold  p-3"
              >
                Call
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
