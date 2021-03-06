import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useUserData from "../../components/context/logincontextvalue";
import useCurrentAstrologer from "../../components/context/profileContextvalue";
import Filter from "../../components/filtercomponent/filter";
import CombineForm from "../../components/form/combineForm";
import Loader from "../../components/loader";

import { supabase } from "../../components/supabase/supaclient";
import { BlurBackground } from "../../components/utils/feature";
const data = require("../../components/jsondata/astrologerdata.json");

export default function TalkToAstrologer() {
  const [filter, setfilter] = useState(false);
  const [loader, setloader] = useState(true);
  const [state, setstate] = useState([]);
  const [allastrologer, setastrolger] = useState([]);
  const [render, serrender] = useState(false);
  const handleSearch = (e) => {
    const { value } = e.target;
    const arr = allastrologer.filter((item) =>
      item.name.includes(value.toLowerCase())
    );
    setstate(arr);
  };

  useEffect(async () => {
    const d = await fetchAstrologer();
    setstate(d);
    setastrolger(d);
  }, []);

  useEffect(async () => {
    const mySubscription = supabase
      .from("astrologerProfile")
      .on("*", (payload) => {
        alert("Change received!", payload);

        if (payload.new) {
          const data = allastrologer.slice().map((item) => {
            return item.id === payload.new.id ? payload.new : item;
          });
          setstate(data);
          setastrolger(data);
        }
      })
      .subscribe();
    return () => supabase.removeSubscription(mySubscription);
  }, [allastrologer, state]);

  const fetchAstrologer = async () => {
    const { data, error } = await supabase
      .from("astrologerProfile")
      .select("*")
      .order("id", { isActive: true });
    setloader(false);
    return data;
  };

  const skill = [
    ...new Set(
      [].concat.apply(
        [],
        state.map((item, i) => item.expert.toString().split(","))
      )
    ),
  ];

  const skill2 = [
    ...new Set(
      [].concat.apply(
        [],
        data.astrologer.map((item, i) => item.expert.toString().split(","))
      )
    ),
  ];

  const language = [
    ...new Set(
      [].concat.apply(
        [],
        state.map((item, i) => item.language.toString().split(","))
      )
    ),
  ];

  const language2 = [
    ...new Set(
      [].concat.apply(
        [],
        data.astrologer.map((item, i) => item.language.toString().split(","))
      )
    ),
  ];

  const gender = [
    ...new Set(
      [].concat.apply(
        [],
        state.map((item, i) => item.gender)
      )
    ),
  ];

  const gender2 = [
    ...new Set(
      [].concat.apply(
        [],
        data.astrologer.map((item, i) => item.gender)
      )
    ),
  ];

  const handlefilter = (e) => {
    const arr = allastrologer.filter((item) => {
      return (
        item.language
          .toString()
          .split(",")
          .some((i) => {
            return e.language.includes(i);
          }) &&
        e.gender.some((i) => {
          return i === item.gender;
        }) &&
        item.expert
          .toString()
          .split(",")
          .some((i) => {
            return e.skill.includes(i);
          })
      );
    });
    setstate(arr);
  };

  const [filterval, setfilterval] = useState({
    skill: skill2,
    language: language2,
    gender: gender2,
  });
  const { user } = useUserData();

  const router = useRouter();
  return (
    <>
      {filter && (
        <>
          <BlurBackground />
          <Filter
            activegender={gender}
            filter={filterval}
            passfilter={handlefilter}
            activelanguage={language}
            activeskill={skill}
            passactive={() => setfilter((prev) => !prev)}
          />
        </>
      )}

      <div className="pb-36 bg-white pt-28 md:py-36  sm:px-10 flex flex-col gap-14 w-full">
        <div className="flex w-full  md:flex-row flex-col-reverse  justify-between gap-7 md:gap-16 items-center max-w-7xl px-5 mx-auto">
          {user !== null && (
            <div
              className={`${
                user === null ? "invisible opacity-0 hidden" : "visible"
              } text-lg md:block hidden font-semibold  shadow-md shadow-red-300/20 text-red-500 bg-white border-2 border-red-500 py-2 rounded-md max-w-[280px] text-center w-full px-5`}
            >
              Available balance: ??? 0
            </div>
          )}
          <div className="flex justify-between gap-5 items-center flex-row   md:gap-10 overflow-x-scroll   w-full py-2 ">
            <div
              className={`w-full ${user === null ? "" : "mx-auto"} max-w-xs`}
            >
              <label className="border  py-2 rounded-md  border-red-400  px-3 flex flex-row-reverse">
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
                  className="caret-red-400 outline-none bg-transparent pr-2  w-full"
                />
              </label>
            </div>

            <div className="flex md:gap-6 gap-4 ">
              <button
                onClick={() => router.push("/add-wallet-money")}
                className="bg-green-500 md:flex hidden hover:bg-green-600 py-2 px-5 rounded-md text-white font-bold"
              >
                Recharge
              </button>
              <button
                onClick={() => setfilter((prev) => !prev)}
                className="border border-red-400 flex gap-2 items-center hover:border-zinc-800 py-2 px-5 rounded-md text-zinc-800 font-bold"
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
            </div>
          </div>
        </div>

        {state.length > 0 && !loader ? (
          <div className="grid w-full sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto px-5 gap-10">
            {state.map((item, i) => (
              <AstrologerCard key={i} data={item} />
            ))}
          </div>
        ) : (
          <>
            {loader ? (
              <Loader />
            ) : (
              <h2 className="font-bold mx-auto text-center px-5">
                Please Write Correct Astrologer Details
              </h2>
            )}
          </>
        )}
      </div>
    </>
  );
}

const AstrologerCard = (props) => {
  const router = useRouter();
  const { storeCurrentAstrologer } = useCurrentAstrologer();
  const [login, setlogin] = useState(false);
  const { user } = useUserData();
  const handleclose2 = () => {
    setlogin(false);
  };

  const handleFormSuccess = (e) => {
    if (e && user !== null) {
      router.push("/talktoastrologer/call-intake/call-intake-form");
      setlogin(false);
      storeCurrentAstrologer(props.data.id, user.email, 0);
    }
  };

  const handleCallButton = () => {
    if (user === null) {
      setlogin(true);
    } else {
      router.push("/talktoastrologer/call-intake/call-intake-form");
      storeCurrentAstrologer(props.data.id, user.email, 0);
    }
  };

  return (
    <>
      {login && <BlurBackground z="z-30" />}
      <CombineForm
        passactive={handleclose2}
        passsuccess={handleFormSuccess}
        transition={
          login
            ? "-translate-y-1/2 opacity-100 visible"
            : "translate-y-0 opacity-0 invisible"
        }
      />
      <div className="shadow-md shadow-red-300/40 duration-150 ease-linear hover:-translate-y-1.5 border border-red-200 relative  flex bg-white flex-col gap-4 p-5 rounded-xl">
        {props.data.isActive && !props.data.currentQueue && (
          <>
            <span className="animate-ping absolute  bg-green-500 right-4  w-4 h-4 rounded-full top-4"></span>
            <span className="absolute inline-flex right-4 top-4 rounded-full h-3.5 w-3.5 bg-green-500"></span>
          </>
        )}
        <div
          onClick={() =>
            router.push(`/talktoastrologer/${props.data.astrologerId}`)
          }
          className="flex border-b pb-3 border-zinc-200 cursor-pointer items-center gap-5 "
        >
          <div
            className={`w-14 h-14 ${
              props.data.currentQueue ? "ring-4 ring-red-400 rounded-full" : ""
            }`}
          >
            <img
              src="/imgs/avatar-2.png"
              className="w-full h-full rounded-full"
              alt="demo"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="capitalize md:text-2xl text-xl">
              {props.data.name}
            </h5>
            <span className="text-xs text-yellow-400"> ???????????????</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative">
          <p className="flex gap-3 py-1 overflow-x-scroll">
            {props.data.expert
              .toString()
              .split(",")
              .map((item, i) => (
                <span
                  key={i}
                  className={`py-1 capitalize ${
                    color[item.split(" ").join("").toLowerCase()] === undefined
                      ? "bg-indigo-50"
                      : color[item.split(" ").join("").toLowerCase()]
                  } px-3 rounded-md text-sm shadow-sm shadow-zinc-300/80 text-zinc-800 font-semibold`}
                >
                  {item}
                </span>
              ))}
          </p>
          <p className="flex gap-1">
            <span className="font-semibold">Lang:</span>
            {props.data.language
              .toString()
              .split(",")
              .map((item, i) => (
                <span className="capitalize" key={i}>
                  {item},
                </span>
              ))}
          </p>
          <p>
            <span className="font-semibold capitalize">Exp:</span>{" "}
            {props.data.experience}
            {","}
          </p>
          <p>
            <span className="font-semibold">???</span> {props.data.price}/min
          </p>

          <button
            onClick={handleCallButton}
            disabled={!props.data.isActive && props.data.currentQueue}
            className={`${
              props.data.isActive && !props.data.currentQueue
                ? "hover:bg-green-500  hover:text-white text-green-500  border-green-500 cursor-pointer "
                : "border-red-500 text-red-500  opacity-70 cursor-not-allowed"
            }   right-3 bottom-0 absolute  font-bold rounded-lg border-2 max-w-max px-7  py-1.5`}
          >
            {props.data.currentQueue ? "Busy" : "Call"}
          </button>
        </div>
      </div>
    </>
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
  horary: "bg-fuchsia-100",
};
