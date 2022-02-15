import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useCurrentAstrologer from "../../components/context/profileContextvalue";
import Sidebar from "../../components/navbar/sidebar";
import { supabase } from "../../components/supabase/supaclient";
const md5 = require("md5");
export default function AstrologerIndex(props) {
  const [update, setupdate] = useState(null);
  const [active, setactive] = useState();

  const handleActive = async () => {
    // setactive((prev) => !prev);

    const { data, error } = await supabase
      .from("astrologerProfile")
      .update({ isActive: !update.isActive })
      .match({ astrologerId: update.astrologerId });
    setupdate(data[0]);
    setactive(data[0]?.isActive);
  };

  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("astrologerSignup");
    if (session === null) {
      router.replace("/astrologer-admin/login");
    } else {
      profileData(md5(JSON.parse(session)?.email));
    }
  }, []);

  const profileData = async (email) => {
    const { data, error } = await supabase
      .from("astrologerProfile")
      .select("*")
      .eq("astrologerId", email);
    setupdate(data[0]);
    setactive(data[0]?.isActive);
  };
  console.log(update);
  return (
    <div className="w-full  bg-gray-50 overflow-y-scroll h-screen flex">
      <Sidebar active="home">
        <div className="w-full overflow-y-scroll h-screen pb-24 md:mt-6 mt-10">
          <div className="px-5 lg:px-10 w-full py-10">
            <h2>Astrolger Panel</h2>
            <div className="bg-red-100 gap-10  w-full flex justify-between mt-10 relative p-7 rounded-xl text-3xl font-bold">
              <span className="flex md:text-3xl text-2xl gap-2 flex-col">
                Welcome {update?.name}
                <p className=" max-w-md text-sm md:text-base font-normal leading-6">
                  Start your astrology prediction by activating your Status
                </p>
                <button
                  onClick={handleActive}
                  className={`${
                    active
                      ? "bg-zinc-800 text-white border-transparent"
                      : "bg-white"
                  } text-sm mt-4 md:text-base cursor-pointer font-semibold  relative py-2 md:py-3 max-w-max  px-8 rounded-md shadow-md border-zinc-800 border-2    text-zinc-800`}
                >
                  Change Your Active Status
                </button>
              </span>
              <div className="md:block hidden">
                <img
                  src="/imgs/woman.png"
                  className="w-[150px]"
                  alt="astrologer"
                />
              </div>
            </div>
          </div>
          <div className="px-5 flex md:flex-row flex-col md:gap-12 gap-10 justify-between lg:px-10">
            <div className="flex flex-col gap-7 w-full">
              <h4>Recent history</h4>
              <div className="bg-white shadow-md px-5 py-3 flex-col flex divide-y-2  rounded-xl">
                <div
                  onClick={() => router.push("/astrologer-admin/call-history")}
                  className="flex cursor-pointer relative flex-col gap-1 py-5"
                >
                  <span className="absolute top-3 right-2">
                    <img
                      src="/imgs/sucess2.png"
                      className="w-5 h-5"
                      alt="success"
                    />
                  </span>
                  <span className="md:text-xl text-lg font-semibold">
                    Raj shah
                  </span>
                  <div className="flex gap-5">
                    <p className="flex gap-1 font-semibold items-center">
                      Date:
                      <span className=" font-normal">03/10/2022</span>
                    </p>
                    <p className="flex gap-1 font-semibold items-center">
                      Time:
                      <span className=" font-normal">05:23 AM</span>
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => router.push("/astrologer-admin/call-history")}
                  className="flex cursor-pointer relative flex-col gap-1 py-5"
                >
                  <span className="absolute top-3 right-2">
                    <img
                      src="/imgs/cancel.png"
                      className="w-5 h-5"
                      alt="success"
                    />
                  </span>
                  <span className="md:text-xl text-lg font-semibold">
                    Raj shah
                  </span>
                  <div className="flex gap-5">
                    <p className="flex gap-1 font-semibold items-center">
                      Date:
                      <span className=" font-normal">03/10/2022</span>
                    </p>
                    <p className="flex gap-1 font-semibold items-center">
                      Time:
                      <span className=" font-normal">05:23 AM</span>
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => router.push("/astrologer-admin/call-history")}
                  className="flex cursor-pointer relative flex-col gap-1 py-5"
                >
                  <span className="absolute top-3 right-2">
                    <img
                      src="/imgs/sucess2.png"
                      className="w-5 h-5"
                      alt="success"
                    />
                  </span>
                  <span className="md:text-xl text-lg font-semibold">
                    Raj shah
                  </span>
                  <div className="flex gap-5">
                    <p className="flex gap-1 font-semibold items-center">
                      Date:
                      <span className=" font-normal">03/10/2022</span>
                    </p>
                    <p className="flex gap-1 font-semibold items-center">
                      Time:
                      <span className=" font-normal">05:23 AM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-max">
              <div className="flex relative before:absolute before:top-0 before:right-0 before:bg-orange-300 before:rounded-full before:w-[200px] before:h-[200px] z-[2] before:z-[-1] before:translate-x-[88px] before:translate-y-[-100px] overflow-hidden shadow-lg leading-7 md:mt-16 text-center flex-col  bg-indigo-800  px-9 py-14 md:py-12 rounded-xl gap-7 text-zinc-200">
                <span className="py-3 leading-7 px-7 mx-auto  rounded-full max-w-max text-3xl font-bold text-white">
                  100 Min
                </span>
                This would be your total calling time if having any query please
                contact us
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
      {/* <button
        onClick={handleActive}
        className={`${
          !active
            ? "border-green-500 text-zinc-800 "
            : "border-transparent bg-green-500 text-white"
        } py-2.5 px-10 max-w-xs border-2 rounded-xl font-semibold`}
      >
        Change Active Status
      </button> */}
    </div>
  );
}

{
  /* <div className="shadow-xl flex flex-col gap-3 px-5 max-w-sm bg-zinc-50 py-6 rounded-md mt-10">
<h5 className="capitalize border-b border-zinc-500 pb-2 ">
  {userData.name}
</h5>

<div className="flex gap-7 ">
  <div className="flex gap-2 pt-2 items-center">
    <svg
      className="w-5 h-5 fill-zinc-700"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 32 32"
    >
      <g id="calendar_1_">
        <path
          d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1   c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667   C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667   C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1   s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z"
          fill="#333332"
        />
        <rect fill="#333332" height="3" width="4" x="7" y="12" />
        <rect fill="#333332" height="3" width="4" x="7" y="17" />
        <rect fill="#333332" height="3" width="4" x="7" y="22" />
        <rect fill="#333332" height="3" width="4" x="14" y="22" />
        <rect fill="#333332" height="3" width="4" x="14" y="17" />
        <rect fill="#333332" height="3" width="4" x="14" y="12" />
        <rect fill="#333332" height="3" width="4" x="21" y="22" />
        <rect fill="#333332" height="3" width="4" x="21" y="17" />
        <rect fill="#333332" height="3" width="4" x="21" y="12" />
      </g>
    </svg>
    {userData.day < 10 ? "0" + userData.day : userData.day}-
    {userData.month < 10 ? "0" + userData.month : userData.month}-
    {userData.year}
  </div>
  <div className="flex gap-2 pt-2  items-center">
    <svg
      className="w-5 h-5 fill-zinc-700"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <g data-name="Layer 15" id="Layer_15">
        <path d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z" />
        <path d="M20.24,21.66l-4.95-4.95A1,1,0,0,1,15,16V8h2v7.59l4.66,4.65Z" />
      </g>
    </svg>
    {userData.hour < 10 ? "0" + userData.hour : userData.hour} :{" "}
    {userData.min < 10 ? "0" + userData.min : userData.min}{" "}
    {userData.hour < 12 ? "AM" : "PM"}
  </div>
</div>
<div className="flex gap-2 pt-2 items-center">
  <svg
    className="w-5 h-5 fill-zinc-700"
    data-name="Livello 1"
    id="Livello_1"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title />
    <path d="M64,128a6.9,6.9,0,0,1-4.89-2L26.23,93.12A55.05,55.05,0,0,1,10,53.69,53.29,53.29,0,0,1,25.87,15.58a54.56,54.56,0,0,1,76.26,0h0A53.29,53.29,0,0,1,118,53.69a55.05,55.05,0,0,1-16.23,39.43L68.89,125.94A6.9,6.9,0,0,1,64,128ZM64,6A48.19,48.19,0,0,0,30.08,19.85,47.34,47.34,0,0,0,16,53.7,49.1,49.1,0,0,0,30.47,88.87l32.87,32.82a.91.91,0,0,0,1.31,0L97.53,88.87A49.1,49.1,0,0,0,112,53.7,47.34,47.34,0,0,0,97.92,19.85h0A48.19,48.19,0,0,0,64,6Z" />
    <path d="M64,81.41a27.25,27.25,0,1,1,19.3-8A27.23,27.23,0,0,1,64,81.41Zm0-48.49a21.26,21.26,0,1,0,15.06,6.22h0A21.25,21.25,0,0,0,64,32.92Z" />
  </svg>
  {userData.country}, {userData.place}
</div>
<div className="flex gap-2 capitalize pt-2 items-center">
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 fill-zinc-700"
    viewBox="0 0 64.000000 64.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M207 582 c-10 -10 -17 -26 -17 -35 0 -14 -12 -17 -79 -17 -44 0 -86
-3 -95 -6 -14 -5 -16 -35 -16 -229 0 -202 2 -223 18 -238 16 -15 52 -17 304
-17 263 0 286 1 301 18 15 16 17 48 17 239 0 192 -2 222 -16 227 -9 3 -51 6
-95 6 -70 0 -79 2 -79 18 0 40 -31 52 -132 52 -79 0 -98 -3 -111 -18z m203
-37 c0 -12 -17 -15 -90 -15 -73 0 -90 3 -90 15 0 12 17 15 90 15 73 0 90 -3
90 -15z m180 -63 c0 -4 -13 -46 -28 -92 l-29 -85 -60 -3 c-54 -3 -61 -1 -66
18 -5 18 -13 20 -87 20 -74 0 -82 -2 -87 -20 -5 -19 -12 -21 -66 -18 l-60 3
-29 85 c-15 46 -28 88 -28 92 0 4 122 8 270 8 149 0 270 -4 270 -8z m-499
-204 c15 -13 39 -18 80 -18 46 0 59 -3 59 -15 0 -12 17 -15 90 -15 73 0 90 3
90 15 0 12 13 15 59 15 69 0 94 16 115 75 14 38 15 33 15 -107 l1 -148 -280 0
-280 0 1 148 c0 140 1 145 15 107 8 -22 24 -48 35 -57z m287 5 c-3 -15 -14
-18 -58 -18 -44 0 -55 3 -58 18 -3 15 5 17 58 17 53 0 61 -2 58 -17z"
      />
    </g>
  </svg>
  {userData.occupation}
</div>
<div className="flex capitalize gap-2 pt-2 items-center">
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 fill-zinc-700"
    viewBox="0 0 30.000000 30.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path d="M44 246 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28 -12z" />
      <path
        d="M204 246 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28
-13 2 -25 -3 -28 -12z"
      />
      <path
        d="M124 196 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28
-13 2 -25 -3 -28 -12z"
      />
      <path d="M44 146 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28 -12z" />
      <path
        d="M204 146 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28
-12z"
      />
      <path
        d="M28 69 c-33 -19 -18 -29 42 -29 61 0 76 11 41 30 -25 13 -61 12 -83
-1z"
      />
      <path
        d="M188 69 c-33 -19 -18 -29 42 -29 61 0 76 11 41 30 -25 13 -61 12 -83
-1z"
      />
    </g>
  </svg>

  {userData.martial_status}
</div>
<div className="flex capitalize gap-2 pt-2 items-center">
  <svg
    className="w-5 h-5 fill-zinc-700"
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48.000000 48.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M60 390 c-18 -18 -20 -33 -20 -130 0 -97 2 -112 20 -130 11 -11 29
-20 40 -20 16 0 20 -7 20 -35 0 -52 22 -54 85 -6 51 39 58 41 125 41 103 0
110 9 110 150 0 154 6 150 -200 150 -147 0 -162 -2 -180 -20z m338 -22 c16
-16 16 -200 0 -216 -7 -7 -41 -12 -81 -12 -63 0 -72 -3 -115 -36 l-47 -36 -3
36 c-3 32 -6 36 -31 36 -15 0 -32 5 -39 12 -16 16 -16 200 0 216 17 17 299 17
316 0z"
      />
    </g>
  </svg>
  {userData.topic_of_concern}
</div> */
}

{
  /* <div className="font-bold group max-w-max cursor-default relative text-xl items-center flex gap-3 justify-end px-5 py-3 backdrop-filter ">
              <img src="/imgs/user.png" className="w-10 h-10" alt="profile" />
              Dharmik
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:rotate-180 duration-100 ease-linear"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <button className="bg-zinc-100 cursor-pointer group-hover:opacity-100 group-hover:visible opacity-0 invisible absolute top-[96%] w-[170px] hover:bg-zinc-200 text-zinc-800 text-lg font-semibold py-2 px-6 rounded-lg">
                Logout
              </button>
            </div> */
}
