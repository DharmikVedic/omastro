import { useRouter } from "next/router";
import React, { useState } from "react";
import Filter from "../../components/filtercomponent/filter";
import { BlurBackground } from "../../components/utils/feature";
const data = require("../../components/jsondata/astrologerdata.json");
export default function TalkToAstrologer() {
  const [filter, setfilter] = useState(false);

  const [state, setstate] = useState(data.astrologer);

  const handleSearch = (e) => {
    const { value } = e.target;
    const arr = data.astrologer.filter((item) =>
      item.name.includes(value.toLowerCase())
    );
    setstate(arr);
  };

  const skill = [
    ...new Set(
      [].concat.apply(
        [],
        data.astrologer.map((item, i) => item.key)
      )
    ),
  ];

  const language = [
    ...new Set(
      [].concat.apply(
        [],
        data.astrologer.map((item, i) => item.lang)
      )
    ),
  ];

  // console.log(
  //   state.filter((item) => {
  //     return item.lang.filter((i) =>  ["marathi"].includes(i));
  //   })
  // );

  const handlefilter = (e) => {
    console.log(e);
    const arr = state.filter((item) => {
      return (
        // e.gender.includes(item.gender) &&
        // item.key.filter((i) => (e.skill.includes(i) ? i : "")) &&
        item.lang.map((i) => e.lang.includes(i))
      );
    });
    console.log(arr);
    // setstate(arr);
  };

  // console.log(state);

  return (
    <>
      {filter && (
        <>
          <BlurBackground />
          <Filter
            passfilter={handlefilter}
            activelanguage={language}
            activeskill={skill}
            passactive={() => setfilter((prev) => !prev)}
          />
        </>
      )}
      <div className="pb-36 bg-zinc-50 pt-28 md:py-36  sm:px-10 flex flex-col gap-14 w-full">
        <div className="flex w-full md:flex-row flex-col-reverse  justify-between gap-7 md:gap-16 items-center max-w-7xl px-5 mx-auto">
          <div className="text-lg md:block hidden font-semibold  shadow-md shadow-red-300/20 text-red-400 bg-white border-2 border-red-400 py-2 rounded-md max-w-[280px] text-center w-full px-5">
            Available balance: ₹ 0
          </div>
          <div className="flex justify-between gap-5 items-center flex-row   md:gap-10 overflow-x-scroll   w-full py-2 ">
            <div className="w-full mx-auto max-w-xs">
              <label className="border-2 py-2 rounded-md  border-zinc-400  px-3 flex flex-row-reverse">
                <svg
                  className="w-6 h-6 hover:fill-zinc-800 fill-zinc-400"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <g id="search">
                    <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
                  </g>
                </svg>
                <input
                  type="text"
                  onChange={handleSearch}
                  placeholder="Search By Name"
                  className=" outline-none bg-transparent pr-2  w-full"
                />
              </label>
            </div>

            <div className="flex md:gap-6 gap-4 ">
              <button className="bg-green-500 md:flex hidden hover:bg-green-600 py-2 px-5 rounded-md text-white font-bold">
                Recharge
              </button>
              <button
                onClick={() => setfilter((prev) => !prev)}
                className="border-2 border-zinc-400 flex gap-2 items-center hover:border-zinc-800 py-2 px-5 rounded-md text-zinc-800 font-bold"
              >
                <svg
                  className="w-6 h-6 fill-zinc-800"
                  enableBackground="new 0 0 32 32"
                  id="Editable-line"
                  version="1.1"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="  M3.241,7.646L13,19v9l6-4v-5l9.759-11.354C29.315,6.996,28.848,6,27.986,6H4.014C3.152,6,2.685,6.996,3.241,7.646z"
                    fill="none"
                    id="XMLID_6_"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                </svg>
                Filter
              </button>
              {/* <select
                name="month"
                value={" "}
                className="text-zinc-500 p-2 border-2 w-[120px] cursor-pointer hover:border-zinc-800 rounded-md focus:outline-none focus:border-black border-zinc-400"
              >
                <option value>Sort By</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select> */}
            </div>
          </div>
        </div>

        {state.length > 0 ? (
          <div className="grid w-full sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto px-5 gap-10">
            {state.map((item, i) => (
              <AstrologerCard key={i} data={item} />
            ))}
          </div>
        ) : (
          <h2 className="font-bold mx-auto text-center px-5">
            Please Write Correct Astrologer Name
          </h2>
        )}
      </div>
    </>
  );
}

const AstrologerCard = (props) => {
  const router = useRouter();
  return (
    <div
      onClick={() =>
        router.push(
          `/talktoastrologer/${props.data.name
            .split(" ")
            .join("")
            .toLowerCase()}`
        )
      }
      className="shadow-md cursor-pointer flex bg-white flex-col gap-4 p-5 rounded-xl"
    >
      <div className="flex border-b pb-3 border-zinc-200 items-center gap-5 ">
        <div className="w-14 h-14">
          <img
            src={props.data.imgs}
            className="w-full h-full rounded-full"
            alt="demo"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="capitalize md:text-2xl text-xl">{props.data.name}</h5>
          <span className="text-xs text-yellow-400"> ★★★★★</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 relative">
        <p className="flex gap-3 py-1 overflow-x-scroll">
          {props.data.key.map((item, i) => (
            <span
              key={i}
              className={`py-1 capitalize ${
                color[item.split(" ").join("").toLowerCase()]
              } px-3 rounded-md text-sm shadow-sm shadow-zinc-300/80 text-zinc-800 font-semibold`}
            >
              {item}
            </span>
          ))}
        </p>
        <p className="flex gap-1">
          <span className="font-semibold">Lang:</span>
          {props.data.lang.map((item, i) => (
            <span className="capitalize" key={i}>
              {item},
            </span>
          ))}
        </p>
        <p>
          <span className="font-semibold">Exp:</span> {props.data.exp} Years,
        </p>
        <p>
          <span className="font-semibold">₹</span> {props.data.price}/min
        </p>
        <button className="shadow-md hover:bg-green-600 shadow-green-500/40 right-3 bottom-0 absolute bg-green-500 text-white  font-bold rounded-lg max-w-max px-7  py-1.5">
          Call
        </button>
      </div>
    </div>
  );
};

export const color = {
  vastu: "bg-green-100",
  numerology: "bg-sky-100",
  vedic: "bg-purple-100",
  tarot: "bg-pink-100",
  kp: "bg-yellow-100",
  lalkitab: "bg-indigo-100",
  nadi: "bg-cyan-100",
};
