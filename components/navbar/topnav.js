import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useUserData from "../context/logincontextvalue";
import CombineForm from "../form/combineForm";
import { BlurBackground } from "../utils/feature";
import Mobilenav from "./mobilenav";

function Topnav() {
  const router = useRouter();
  const [displaymenu, setdisplamenu] = useState();
  const url = router.asPath.split("/")[1];
  // const [y, sety] = useState(false);
  const [login, setlogin] = useState(false);
  // const [mouted, setmouted] = useState(false);

  const { user } = useUserData();

  // useEffect(() => {
  //   setmouted(true);
  //   if (mouted) {
  //     window.addEventListener("scroll", (e) => handleNavigation(e));
  //     const handleNavigation = (e) => {
  //       const window1 = e.currentTarget;
  //       const scroll =
  //         window1.pageYOffset || document.documentElement.scrollTop;
  //       if (scroll > 100) {
  //         sety(true);
  //       } else {
  //         sety(false);
  //       }
  //     };
  //   }
  //   return () => {
  //     setmouted(false);
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [mouted]);

  const handleclose = (e) => {
    setdisplamenu((prev) => !prev);
  };

  const handleclose2 = () => {
    setlogin(false);
  };

  const { signOut } = useUserData();
  return (
    <>
      {login && <BlurBackground z="z-30" />}
      <CombineForm
        passactive={handleclose2}
        passsuccess={handleclose2}
        transition={
          login
            ? "-translate-y-1/2 opacity-100 visible"
            : "translate-y-0 opacity-0 invisible"
        }
      />
      <Mobilenav
        transition={
          displaymenu
            ? "translate-x-0 opacity-100 visible"
            : "transplate-x-[300px] opacity-0 invisible "
        }
        passclose={handleclose}
      />
      <div className="bg-white border-b border-red-100 shadow-md shadow-red-100/50 fixed w-full z-20 top-0 px-5">
        <div className="w-full max-w-7xl py-3 mx-auto flex justify-between items-center">
          <button
            onClick={() => router.push("/")}
            className="h-[60px] cursor-pointer"
          >
            <img
              src="/imgs/logo.jpg"
              alt="logo"
              className="h-full cursor-pointer"
            />
          </button>
          <div className=" flex gap-5">
            <div
              onClick={() => router.push("/add-wallet-money")}
              className="border items-center flex gap-4 shadow-md shadow-red-400/20 border-red-500 md:hidden  py-1.5 px-2 rounded-md text-zinc-800 font-bold"
            >
              <svg
                className="w-6 h-6 fill-red-500"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 48 48"
              >
                <path
                  clipRule="evenodd"
                  d="M47,40L47,40c0,2.762-2.238,5-5,5l0,0H6l0,0c-2.762,0-5-2.238-5-5V11  c0-2.209,1.791-4,4-4l0,0h20.171l8.099-2.934c0.513-0.187,1.081,0.078,1.268,0.589L35.391,7H39c2.209,0,4,1.791,4,4v2l0,0  c2.209,0,4,1.791,4,4V40z M5,9L5,9c-1.104,0-2,0.896-2,2s0.896,2,2,2h3.445l0,0h0.189c0.013-0.005,0.021-0.016,0.034-0.021L19.65,9  H5z M34.078,9.181l-1.062-2.924l-0.001,0v0L30.964,7h0.003l-5.514,2h-0.01l-11.039,4h21.062L34.078,9.181z M41,11  c0-1.104-0.896-2-2-2h-2.883l1.454,4H41l0,0V11z M43,15H5l0,0c-0.732,0-1.41-0.211-2-0.555V40c0,1.657,1.344,3,3,3h36  c1.657,0,3-1.343,3-3v-7h-4c-2.209,0-4-1.791-4-4s1.791-4,4-4h4v-8C45,15.896,44.104,15,43,15z M45,31v-4h-4c-1.104,0-2,0.896-2,2  s0.896,2,2,2H45z M41,28h2v2h-2V28z"
                  fillRule="evenodd"
                />
              </svg>
              ₹ 0
            </div>
            <button
              className="md:hidden ml-auto block"
              onClick={() => setdisplamenu((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 stroke-zinc-800`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul className="md:flex gap-10 text-lg text-zinc-800 items-center  hidden">
              <li
                className={`${
                  url === "talktoastrologer"
                    ? " bg-white  border-yellow-400"
                    : " bg-yellow-400 border-transparent hover:border-yellow-400"
                } rounded-full text-black hover:bg-white border-2`}
              >
                <Link href="/talktoastrologer">
                  <a className="flex  gap-3 items-center py-2 px-5 font-semibold  rounded-full cursor-pointer">
                    <svg
                      viewBox="0 0 512 512"
                      className="w-6  fill-zinc-800 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g data-name="1" id="_1">
                        <path d="M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z" />
                        <path d="M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z" />
                        <path d="M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z" />
                      </g>
                    </svg>
                    Talk To Astrologer
                  </a>
                </Link>
              </li>
              {user !== null ? (
                <div className="relative group py-2 cursor-default">
                  <div className="border-2  shadow-lg shadow-red-300/30 border-red-500 text-sm text-red-500 font-semibold py-1 px-4 rounded-md">
                    {user.user_metadata?.name}
                    <button
                      onClick={async () => await signOut()}
                      className="group-hover:opacity-100 cursor-pointer group-hover:visible invisible opacity-0 absolute top-full left-0  py-2 px-7 bg-zinc-100 rounded-md text-zinc-800 "
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <li
                  onClick={() => setlogin(true)}
                  className="font-semibold flex gap-2 items-center cursor-pointer"
                >
                  <svg
                    className="w-6 h-6 fill-zinc-800"
                    version="1.1"
                    viewBox="0 0 50 50"
                  >
                    <g id="Layer_1">
                      <path d="M25,1C11.767,1,1,11.767,1,25c0,7.091,3.094,13.472,8,17.869v0.017l0.348,0.3c0.061,0.053,0.128,0.097,0.19,0.149   c0.431,0.364,0.875,0.713,1.331,1.047c0.123,0.09,0.246,0.177,0.371,0.264c0.484,0.34,0.979,0.664,1.487,0.968   c0.085,0.051,0.172,0.099,0.257,0.148c0.557,0.324,1.126,0.629,1.71,0.908c0.006,0.003,0.012,0.005,0.018,0.008   c1.249,0.595,2.559,1.082,3.915,1.456c0.025,0.007,0.05,0.015,0.075,0.021c0.641,0.175,1.293,0.322,1.954,0.443   c0.062,0.011,0.123,0.022,0.185,0.033c0.638,0.112,1.284,0.201,1.939,0.262c0.075,0.007,0.15,0.011,0.224,0.017   C23.663,48.965,24.327,49,25,49s1.337-0.035,1.996-0.09c0.075-0.006,0.15-0.01,0.224-0.017c0.655-0.06,1.301-0.15,1.939-0.262   c0.062-0.011,0.123-0.022,0.185-0.033c0.661-0.121,1.313-0.268,1.954-0.443c0.025-0.007,0.05-0.014,0.075-0.021   c1.356-0.374,2.666-0.861,3.915-1.456c0.006-0.003,0.012-0.005,0.018-0.008c0.584-0.279,1.153-0.585,1.71-0.908   c0.086-0.05,0.172-0.097,0.257-0.148c0.509-0.304,1.004-0.629,1.487-0.968c0.124-0.087,0.248-0.174,0.371-0.264   c0.456-0.334,0.9-0.683,1.331-1.047c0.062-0.052,0.129-0.096,0.19-0.149l0.348-0.3v-0.017c4.906-4.398,8-10.778,8-17.869   C49,11.767,38.233,1,25,1z M25,25c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S29.411,25,25,25z M28,27c6.065,0,11,4.935,11,11   v3.958c-0.042,0.035-0.086,0.067-0.128,0.102c-0.395,0.321-0.8,0.626-1.214,0.918c-0.092,0.065-0.182,0.132-0.274,0.195   c-0.447,0.305-0.906,0.591-1.373,0.862c-0.085,0.05-0.171,0.099-0.257,0.148c-0.49,0.275-0.989,0.533-1.498,0.769   c-0.053,0.025-0.107,0.049-0.161,0.073c-1.661,0.755-3.411,1.302-5.212,1.626c-0.057,0.01-0.114,0.021-0.171,0.031   c-0.567,0.097-1.139,0.172-1.715,0.225c-0.079,0.007-0.159,0.012-0.239,0.018C26.175,46.97,25.589,47,25,47   s-1.175-0.03-1.758-0.077c-0.079-0.006-0.159-0.011-0.239-0.018c-0.576-0.053-1.148-0.127-1.715-0.225   c-0.057-0.01-0.114-0.02-0.171-0.031c-1.801-0.324-3.551-0.871-5.212-1.626c-0.054-0.025-0.108-0.048-0.161-0.073   c-0.509-0.236-1.008-0.494-1.498-0.769c-0.086-0.049-0.171-0.098-0.257-0.148c-0.467-0.27-0.926-0.557-1.373-0.862   c-0.093-0.063-0.183-0.13-0.274-0.195c-0.414-0.292-0.819-0.596-1.214-0.918c-0.042-0.034-0.086-0.067-0.128-0.102V38   c0-6.065,4.935-11,11-11H28z M41,40.076V38c0-6.271-4.464-11.519-10.38-12.735C33.261,23.464,35,20.431,35,17   c0-5.514-4.486-10-10-10s-10,4.486-10,10c0,3.431,1.739,6.464,4.38,8.265C13.464,26.481,9,31.729,9,38v2.076   C5.284,36.135,3,30.831,3,25C3,12.869,12.869,3,25,3s22,9.869,22,22C47,30.831,44.716,36.135,41,40.076z" />
                    </g>
                    <g />
                  </svg>
                  SignIn
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topnav;
