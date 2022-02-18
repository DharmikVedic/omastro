import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { color } from "../../pages/talktoastrologer";
// import { BlurBackground } from "../utils/feature";
// import Mobilesidemenu from "./mobilesidemenu";
// import { astrologerDetail } from "../utils/localuserdata";
import CallingUi from "../callingui.js/callingui";
import { supabase } from "../supabase/supaclient";
import AstrologerSidebar from "../astrologer-admin/sidebar";

export default function Sidebar(props) {
  const [calldisplay, setcalldisplay] = useState(false);
  const [renderer, setrerender] = useState([]);
  const [render, setrender] = useState(false);
  const router = useRouter();

  const fetchaastrologer = async () => {
    if (localStorage.getItem("astrologerSignup") !== null) {
      const data = JSON.parse(localStorage.getItem("astrologerSignup"));
      const d = await supabase
        .from("astrologerProfile")
        .select("*")
        .eq("email", data.email);
      setrerender(d.data[0]);
    }
  };

  useEffect(() => {
    fetchaastrologer();
    if (renderer?.currentQueue) {
      setcalldisplay(true);
    }
  }, [setcalldisplay]);

  useEffect(async () => {
    const mySubscription = supabase
      .from("astrologerProfile")
      .on("*", (payload) => {
        console.log("Change received!", payload);
        setrender((prev) => !prev);
        if (payload.new) {
          setrerender(payload.new);
        }
      })
      .subscribe();
    console.log(mySubscription);
  }, [renderer, render]);

  const handleclose = (e) => {
    setcalldisplay(false);
  };

  // console.log(renderer);

  return (
    <>
      {renderer?.currentQueue && (
        <CallingUi
          closepopup={handleclose}
          astrologerid={renderer.id}
          astrologer={renderer.callingHistory.history.slice(-1)[0]}
        />
      )}
      <div className="w-full max-w-screen-2xl mx-auto flex overflow-hidden">
        <AstrologerSidebar active={props.active} />
        {props.children}
        {props.hide ? (
          ""
        ) : (
          <div className=" flex-col bg-white  w-[570px] hidden lg:flex  gap-5 overflow-y-scroll h-screen justify-start items-start">
            <div className=" flex justify-between items-start w-full">
              <button
                onClick={() => {
                  localStorage.removeItem("astrologerSignup");
                  router.reload();
                }}
                className="flex w-full hover:bg-zinc-800  py-3 px-4  font-semibold text-zinc-600 hover:text-zinc-100 items-center justify-between"
              >
                Logout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full py-2 rounded-xl flex flex-col gap-3 px-5 max-w-xs">
              <div className=" group text-zinc-900 w-full pb-5 cursor-default mx-auto relative text-xl items-center flex-col flex gap-3 justify-end px-5 py-3 ">
                <div className="flex w-full gap-5 items-center">
                  <img
                    src="/imgs/user.png"
                    className="w-[50px]"
                    alt="profile"
                  />
                  <span className="capitalize font-bold">
                    {renderer?.name || "Test"}
                  </span>
                </div>

                <div className="w-full flex flex-col gap-4 mt-2">
                  <span className="flex overflow-x-auto text-[14px] gap-x-3 gap-y-2  pr-5">
                    {renderer?.expert?.split(",").map((item, i) => (
                      <span
                        className={`capitalize font-semibold text-zinc-800 text-xs ${
                          color[item.split(" ").join("").toLowerCase()] ===
                          undefined
                            ? "bg-indigo-50"
                            : color[item.split(" ").join("").toLowerCase()]
                        } px-3 py-1 rounded-md`}
                        key={i}
                      >
                        {item}
                      </span>
                    ))}
                  </span>
                  <div className="flex  items-center text-zinc-700 gap-2 w-full ">
                    <span>
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-zinc-700"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          stroke="none"
                        >
                          <path
                            d="M645 4470 c-107 -22 -225 -89 -296 -168 -62 -70 -117 -191 -130 -287
-6 -52 -9 -319 -7 -760 3 -625 5 -684 22 -735 60 -182 195 -316 366 -363 30
-9 76 -18 103 -22 l47 -6 0 -136 c0 -146 8 -178 58 -229 66 -66 163 -81 248
-39 44 22 66 46 189 215 l139 190 268 0 268 0 0 -372 c0 -417 4 -451 65 -567
59 -113 168 -207 290 -254 60 -22 64 -22 710 -25 l650 -3 210 -208 c171 -170
217 -211 250 -220 77 -21 139 -9 198 40 64 52 71 76 77 239 l5 145 60 7 c209
26 385 171 448 373 22 70 22 74 22 795 0 721 0 725 -22 795 -55 176 -200 313
-378 359 -50 14 -151 16 -682 16 l-623 0 0 368 c0 219 -4 392 -11 428 -36 198
-202 372 -401 419 -54 12 -216 15 -1083 14 -561 -1 -1038 -5 -1060 -9z m2098
-215 c103 -27 167 -82 216 -185 l26 -55 0 -380 0 -380 -325 -5 c-355 -6 -369
-8 -472 -71 -45 -27 -48 -28 -57 -10 -6 10 -83 177 -171 372 -88 194 -168 361
-176 371 -51 55 -138 39 -174 -32 -12 -23 -138 -298 -281 -612 -178 -394 -259
-582 -259 -605 0 -27 9 -44 35 -70 32 -32 40 -35 77 -30 22 3 50 15 62 26 12
12 59 106 106 209 l86 187 273 3 273 2 -5 -22 c-3 -13 -15 -50 -28 -83 -22
-56 -24 -78 -27 -297 l-4 -238 -296 0 c-263 0 -301 -2 -331 -18 -25 -12 -76
-73 -180 -215 l-146 -198 -5 178 c-5 186 -11 212 -53 235 -12 7 -74 15 -137
18 -137 8 -191 30 -262 108 -81 91 -78 61 -78 853 0 661 1 701 19 749 37 98
116 168 220 196 35 10 284 13 1031 13 842 1 994 -1 1043 -14z m-949 -866 l84
-184 -165 -3 c-91 -1 -168 0 -171 2 -2 3 33 88 79 190 46 101 85 183 87 182 1
-2 40 -86 86 -187z m2718 -382 c62 -30 115 -83 150 -149 l23 -43 0 -735 0
-735 -23 -43 c-35 -66 -88 -119 -149 -149 -48 -23 -73 -28 -174 -33 -113 -5
-121 -7 -147 -33 l-27 -27 -3 -187 -3 -186 -213 211 c-116 117 -214 213 -217
214 -2 1 -308 5 -679 8 l-675 5 -50 23 c-93 43 -163 131 -184 230 -15 74 -15
1331 0 1404 6 29 18 66 26 82 21 41 92 115 127 133 81 42 67 42 1136 40 l1025
-2 57 -28z"
                          />
                          <path
                            d="M3343 2746 c-28 -24 -28 -27 -33 -158 l-5 -133 -236 -5 c-213 -5
-239 -7 -258 -24 -33 -30 -45 -78 -27 -119 27 -67 28 -67 482 -67 l406 0 -7
-37 c-26 -144 -131 -327 -232 -407 l-26 -20 -60 64 c-33 36 -80 100 -105 143
-62 106 -110 130 -179 87 -49 -30 -59 -80 -28 -147 29 -65 74 -131 137 -205
l49 -57 -33 -14 c-50 -21 -124 -36 -221 -46 -94 -9 -116 -21 -137 -71 -16 -38
1 -92 38 -121 25 -20 36 -21 132 -16 120 6 243 38 347 91 l67 33 82 -39 c111
-52 217 -78 341 -85 l102 -6 30 31 c45 45 44 101 -3 148 -30 30 -40 34 -85 34
-59 0 -190 25 -240 46 l-33 14 44 52 c121 143 204 318 226 475 l7 48 50 5 c82
9 115 43 115 116 0 26 -8 44 -29 65 l-29 29 -236 0 -236 0 0 121 c0 95 -4 127
-17 149 -32 55 -112 67 -160 26z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="flex divide-x divide-zinc-400 overflow-x-auto text-[14px] gap-y-2  pr-5">
                      {renderer?.language?.split(",").map((item, i) => (
                        <span
                          className={`capitalize px-2 font-normal  text-zinc-800 text-sm
                          `}
                          key={i}
                        >
                          {item}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-center text-zinc-700 gap-5  w-full  ">
                    <span>
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 fill-zinc-700"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          stroke="none"
                        >
                          <path
                            d="M1871 4799 c-128 -25 -257 -125 -311 -241 -37 -79 -50 -146 -50 -259
l0 -89 -696 0 -696 0 -40 -22 c-24 -14 -48 -38 -59 -60 -18 -36 -19 -87 -19
-1716 0 -1100 4 -1698 10 -1733 34 -180 179 -325 359 -359 74 -14 4308 -14
4382 0 180 34 325 179 359 359 6 35 10 632 10 1730 l0 1677 -22 44 c-43 84 1
80 -790 80 l-698 0 0 89 c0 48 -5 112 -10 142 -34 180 -179 325 -359 359 -66
12 -1306 12 -1370 -1z m1359 -309 c60 -31 80 -78 80 -190 l0 -90 -750 0 -750
0 0 90 c0 110 20 159 78 189 36 19 60 20 670 21 615 0 634 -1 672 -20z m1528
-592 c-3 -7 -110 -327 -237 -711 -164 -490 -240 -706 -258 -727 -13 -16 -41
-34 -61 -40 -23 -6 -204 -10 -464 -10 l-428 0 0 90 c0 112 -20 159 -80 190
-38 19 -58 20 -670 20 -612 0 -632 -1 -670 -20 -60 -31 -80 -78 -80 -190 l0
-90 -427 0 c-261 0 -442 4 -465 10 -20 6 -48 24 -61 40 -18 21 -94 237 -258
727 -127 384 -234 704 -237 711 -3 9 441 12 2198 12 1757 0 2201 -3 2198 -12z
m-4188 -1548 c32 -63 121 -152 184 -184 107 -54 124 -56 609 -56 l447 0 0 -90
c0 -112 20 -159 80 -190 38 -19 58 -20 670 -20 612 0 632 1 670 20 60 31 80
78 80 190 l0 90 448 0 c484 0 501 2 608 56 63 32 152 121 184 184 13 25 78
209 146 410 l122 365 1 -1198 c1 -1182 1 -1198 -19 -1237 -13 -26 -34 -47 -60
-60 -39 -20 -54 -20 -2180 -20 -2126 0 -2141 0 -2180 20 -26 13 -47 34 -60 60
-20 39 -20 55 -19 1237 l1 1198 122 -365 c68 -201 133 -385 146 -410z m2440
-90 l0 -150 -450 0 -450 0 0 150 0 150 450 0 450 0 0 -150z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="flex text-[14px] flex-col font-normal">
                      {renderer?.experience}
                    </span>{" "}
                  </div>
                  <span className="flex gap-5 font-normal text-base">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 fill-zinc-800"
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        stroke="none"
                      >
                        <path
                          d="M2370 5113 c-379 -36 -661 -116 -980 -278 -378 -193 -717 -497 -965
-865 -104 -156 -232 -419 -294 -605 -49 -150 -89 -321 -113 -490 -17 -118 -17
-512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220
412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 149
53 407 182 540 271 365 243 667 578 866 963 181 348 271 694 286 1090 15 426
-73 832 -263 1214 -124 250 -263 447 -458 648 -216 224 -428 378 -711 518
-296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m395 -303 c785 -72 1480
-553 1825 -1264 106 -217 166 -409 206 -661 25 -154 25 -496 0 -650 -40 -252
-100 -444 -206 -661 -223 -458 -585 -820 -1045 -1045 -216 -105 -408 -165
-660 -205 -154 -25 -496 -25 -650 0 -433 70 -808 240 -1135 514 -498 417 -800
1067 -800 1722 0 655 301 1302 800 1723 464 390 1069 582 1665 527z"
                        />
                        <path
                          d="M1580 3822 c-107 -53 -107 -211 0 -264 31 -16 72 -18 390 -18 387 0
425 -4 523 -58 67 -36 147 -118 179 -183 l26 -54 -552 -5 c-510 -5 -554 -6
-579 -23 -95 -62 -87 -209 13 -259 32 -16 81 -18 577 -18 l541 0 -11 -30 c-34
-90 -149 -200 -255 -242 -55 -22 -70 -23 -442 -28 -350 -5 -389 -7 -413 -23
-71 -46 -88 -143 -39 -214 46 -68 1253 -1483 1279 -1500 37 -24 102 -27 143
-6 71 37 102 132 66 201 -8 15 -246 299 -529 632 l-514 605 211 6 c237 7 284
16 411 79 189 93 331 262 390 463 l16 57 247 0 c215 0 251 2 282 18 107 53
107 211 0 264 -31 16 -67 18 -281 18 l-246 0 -27 84 c-15 46 -45 112 -66 147
l-38 64 322 5 c288 4 325 7 349 23 95 62 87 209 -13 259 -33 17 -100 18 -980
18 -880 0 -947 -1 -980 -18z"
                        />
                      </g>
                    </svg>

                    <span className="flex text-zinc-700 text-sm capitalize font-normal flex-col ">
                      {renderer?.price}/5 Min
                    </span>
                  </span>
                  <Link href="/astrologer-admin/profile-view">
                    <a className="text-sm font-bold  items-center mr-auto  flex gap-3 w-full justify-center text-zinc-800 py-1.5 px-4 hover:border-zinc-800 duration-100 ease-in rounded-md border border-zinc-300">
                      <svg
                        className="w-4 h-4 fill-zinc-800 duration-100 ease-in"
                        version="1.1"
                        viewBox="0 0 1696.162 1696.143"
                      >
                        <g id="pen">
                          <path d="M1648.016,305.367L1390.795,48.149C1359.747,17.098,1318.466,0,1274.555,0c-43.907,0-85.188,17.098-116.236,48.148   L81.585,1124.866c-10.22,10.22-16.808,23.511-18.75,37.833L0.601,1621.186c-2.774,20.448,4.161,41.015,18.753,55.605   c12.473,12.473,29.313,19.352,46.714,19.352c2.952,0,5.923-0.197,8.891-0.601l458.488-62.231   c14.324-1.945,27.615-8.529,37.835-18.752L1648.016,537.844c31.049-31.048,48.146-72.33,48.146-116.237   C1696.162,377.696,1679.064,336.415,1648.016,305.367z M493.598,1505.366l-350.381,47.558l47.56-350.376L953.78,439.557   l302.818,302.819L493.598,1505.366z M1554.575,444.404l-204.536,204.533l-302.821-302.818l204.535-204.532   c8.22-8.218,17.814-9.446,22.802-9.446c4.988,0,14.582,1.228,22.803,9.446l257.221,257.218c8.217,8.217,9.443,17.812,9.443,22.799   S1562.795,436.186,1554.575,444.404z" />
                        </g>
                        <g id="Layer_1" />
                      </svg>
                      Edit
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-5 w-full">
              <div className="flex flex-col gap-6 pb-24 pt-5 border-t  w-full">
                <h6 className="text-lg flex justify-between w-full">
                  Reminders
                  <span className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <span className="animate-ping absolute  bg-green-500 right-1  w-3 h-3 rounded-full top-0"></span>
                    <span className="absolute inline-flex right-1 top-0 rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                </h6>
                <div className="w-full flex flex-col gap-7">
                  <div className="flex items-center text-zinc-700 gap-6 w-full ">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <svg
                        className="w-5 h-5 fill-orange-600"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title />
                        <g data-name="1" id="_1">
                          <path d="M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z" />
                          <path d="M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z" />
                          <path d="M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z" />
                        </g>
                      </svg>
                    </div>
                    <span className="flex font-semibold  flex-col">
                      Received call from raj
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
