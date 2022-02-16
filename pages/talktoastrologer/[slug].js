const astrologer = require("../../components/jsondata/astrologerdata.json");
import React, { useState } from "react";
import { color } from ".";
import { supabase } from "../../components/supabase/supaclient";
// import { BlurBackground, RechargeWallet } from "../../components/utils/feature";

export async function getStaticPaths() {
  let paths = [];

  const { data, error } = await supabase.from("astrologerProfile").select("*");

  data.map((item) => {
    paths.push({
      params: { slug: item.name.split(" ").join("").toLowerCase() },
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data, error } = await supabase.from("astrologerProfile").select("*");
  return {
    props: {
      data: data.filter(
        (item) => item.name.split(" ").join("").toLowerCase() === params.slug
      ),
    },
  };
}

export default function Astrologer({ data }) {
  const [rechargepop, setrechargepop] = useState(false);

  console.log(data);

  return (
    <>
      {/* {rechargepop && <BlurBackground />}
      <RechargeWallet
        passactive={() => setrechargepop(false)}
        transition={`${
          rechargepop ? " opacity-100 visible" : " opacity-0 invisible"
        }`}
      /> */}
      <div className="py-40 bg-zinc-50 px-5">
        <div className="flex flex-col gap-12 md:gap-14 max-w-5xl mx-auto ">
          <div className=" border bg-white shadow-lg    md:px-16 px-10 py-8 md:py-16 border-red-300 shadow-red-100 flex gap-10 rounded-[20px] md:gap-20 flex-row items-start md:items-center">
            <div className="md:w-[450px] md:block hidden  w-[100px] md:h-[280px] h-auto">
              <img
                src="/imgs/avatar-2.jpeg"
                className="w-full rounded-full h-full object-cover"
                alt="astrologer"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <h2 className="capitalize flex  items-center gap-5">
                <img
                  src="/imgs/avatar-2.jpeg"
                  className="w-[60px] md:hidden block rounded-full object-cover"
                  alt="astrologer"
                />
                {data[0].name}
              </h2>
              <div className="flex gap-10 mt-2">
                <span className="flex gap-2 justify-around text-lg font-semibold text-zinc-800 items-center">
                  <svg
                    className="w-6 h-6 fill-zinc-800"
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
                  207 mins
                </span>
                <span className="flex gap-2 text-lg font-semibold items-center">
                  <svg
                    className="w-5 h-5 fill-zinc-800"
                    id="time-duration-clock-notification"
                    version="1.1"
                    viewBox="0 0 14 15"
                  >
                    <path d="M12.5,1H14V0h-1.5h-11H0v1h1.5v2.707L5.293,7.5L1.5,11.293V14H0v1h1.5h1.293h8.414H12.5H14v-1h-1.5v-2.707L8.707,7.5  L12.5,3.707V1z M5.207,14L7,12.207L8.793,14H5.207z M11.5,3.293L7.293,7.5l4.207,4.207V14h-1.293L7,10.793L3.793,14H2.5v-2.293  L6.707,7.5L2.5,3.293V1h9V3.293z" />
                  </svg>
                  5 min
                </span>
              </div>
              <div className="flex gap-4 overflow-x-scroll w-full py-1">
                {data[0].expert
                  .toString()
                  .split(",")
                  .map((item, i) => (
                    <span
                      key={i}
                      className={`capitalize px-3 py-1 text-[16px] rounded-md text-sm font-semibold ${
                        color[item.toLowerCase()]
                      }`}
                    >
                      {item}
                    </span>
                  ))}
              </div>
              <div className="flex gap-2 text-zinc-800 overflow-x-scroll w-full py-1">
                <span className="font-semibold">Lang:</span>
                {data[0].language
                  .toString()
                  .split(",")
                  .map((item, i) => (
                    <span
                      key={i}
                      className={`capitalize  ${color[item.toLowerCase()]}`}
                    >
                      {item},
                    </span>
                  ))}
              </div>
              <div className="text-zinc-800 font-semibold">
                Exp:{" "}
                <span className="font-normal capitalize">
                  {data[0].experience}
                </span>
              </div>
              <button
                onClick={() => setrechargepop(true)}
                disabled={!data[0].isActive}
                className={`${
                  data[0].isActive
                    ? "hover:bg-green-600 bg-green-500  hover:scale-[1.1] cursor-pointer"
                    : "bg-red-500 opacity-70 cursor-not-allowed"
                } mt-2 max-w-xs gap-10 w-full  whitespace-nowrap transition-all duration-150 ease-in  items-center justify-between  flex  py-3 px-6 rounded-full text-white font-bold text-lg`}
              >
                Call Now <span>₹{data[0].price}/Min</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="">About Gopal</h3>
            <p style={{ lineHeight: 1.8 }} className="max-w-3xl text-base ">
              {data[0].desc}
            </p>
          </div>
          <div className="flex flex-col gap-10  rounded-[15px]">
            <h3 className="">Reviews</h3>
            <div className="flex flex-col max-w-3xl  gap-6">
              <div className="flex relative flex-col gap-4 text-zinc-700 border border-red-200 p-5 rounded-xl">
                <div className="text-zinc-800 flex gap-5">
                  <span className="p-3  rounded-full bg-blue-500 text-white">
                    DS
                  </span>
                  <span className="flex font-semibold items-start gap-1  flex-col">
                    Damoder Sign
                    <span className="text-zinc-500  font-normal text-sm">
                      16 Feb 2022
                    </span>
                  </span>
                </div>
                <span className="md:pr-32">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </span>
                <span className="text-sm absolute top-6 right-6 text-yellow-400">
                  {" "}
                  ★★★★★
                </span>
              </div>
              <div className="flex relative flex-col gap-4 text-zinc-700 border border-red-200 p-5 rounded-xl">
                <div className="text-zinc-800 flex gap-5">
                  <span className="p-3  rounded-full bg-blue-500 text-white">
                    DS
                  </span>
                  <span className="flex font-semibold items-start gap-1  flex-col">
                    Damoder Sign
                    <span className="text-zinc-500  font-normal text-sm">
                      16 Feb 2022
                    </span>
                  </span>
                </div>
                <span className="md:pr-32">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </span>
                <span className="text-sm absolute top-6 right-6 text-yellow-400">
                  {" "}
                  ★★★★★
                </span>
              </div>
              <div className="flex relative flex-col gap-4 text-zinc-700 border border-red-200 p-5 rounded-xl">
                <div className="text-zinc-800 flex gap-5">
                  <span className="p-3  rounded-full bg-blue-500 text-white">
                    DS
                  </span>
                  <span className="flex font-semibold items-start gap-1  flex-col">
                    Damoder Sign
                    <span className="text-zinc-500  font-normal text-sm">
                      16 Feb 2022
                    </span>
                  </span>
                </div>
                <span className="md:pr-32">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </span>
                <span className="text-sm absolute top-6 right-6 text-yellow-400">
                  {" "}
                  ★★★★★
                </span>
              </div>
              <div className="flex relative flex-col gap-4 text-zinc-700 border border-red-200 p-5 rounded-xl">
                <div className="text-zinc-800 flex gap-5">
                  <span className="p-3  rounded-full bg-blue-500 text-white">
                    DS
                  </span>
                  <span className="flex font-semibold items-start gap-1  flex-col">
                    Damoder Sign
                    <span className="text-zinc-500  font-normal text-sm">
                      16 Feb 2022
                    </span>
                  </span>
                </div>
                <span className="md:pr-32">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </span>
                <span className="text-sm absolute top-6 right-6 text-yellow-400">
                  {" "}
                  ★★★★★
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
