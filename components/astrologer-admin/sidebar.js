import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Mobilesidemenu from "../navbar/mobilesidemenu";
import { BlurBackground } from "../utils/feature";

export default function AstrologerSidebar(props) {
  const [sidemenu, setsidemenu] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setsidemenu(false);
    } else {
      setsidemenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, [sidemenu]);

  const router = useRouter();
  return (
    <div>
      {sidemenu && (
        <div className="lg:hidden">
          <BlurBackground />
        </div>
      )}
      <div className=" px-5 z-10 bg-[#c12c2d] w-full flex justify-between items-center absolute py-3 lg:hidden ">
        <div className="flex gap-5 items-center justify-start flex-row-reverse">
          <div onClick={() => router.push("/")}>
            <img src="/imgs/logo.jpg" className="w-[50px]" alt="logo" />
          </div>
          <button className=" " onClick={() => setsidemenu((prev) => !prev)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-white"
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
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("astrologerSignup");
            router.reload();
          }}
          className=" md:hidden max-w-max flex  gap-2 border px-3 border-yellow-400 py-0.5 rounded-md hover:bg-yellow-400 hover:text-zinc-800 text-white items-center  font-semibold "
        >
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {sidemenu && (
        <Mobilesidemenu
          active={props.active}
          passclose={() => setsidemenu((prev) => !prev)}
        />
      )}

      <div className="bg-white  max-w-[280px] static  pt-8 pb-8 gap-20 hidden lg:flex flex-col items-center h-screen w-[500px]">
        <button
          onClick={() => setsidemenu((prev) => !prev)}
          className="absolute top-3 right-3 p-1 md:hidden block rounded-full bg-red-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          onClick={() => router.push("/")}
          className="w-full cursor-pointer px-6 flex items-center mt-5 md:mt-0 text-xl font-semibold gap-4"
        >
          <img src="/imgs/logo.jpg" className="w-[60px]" alt="logo" />
          OmAstro
        </div>
        <ul className="w-full flex flex-col gap-3 md:gap-5">
          <li
            onClick={() => router.push("/astrologer-admin")}
            className={`${
              props.active === "home"
                ? " border-red-500 bg-red-50  bg-opacity-50 text-red-500 "
                : "text-zinc-500 border-transparent"
            } py-3 border-r-4 px-6 relative  hover:border-red-500 hover:bg-red-50  hover:bg-opacity-50 hover:text-red-500 w-full cursor-pointer font-semibold  text-lg flex items-center gap-5`}
          >
            <svg
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              className={`w-7 h-7 stroke-current`}
            >
              <rect fill="none" stroke="none" height="50" width="50" />
              <polyline
                fill="none"
                points="44,21 44,49 6,49   6,21 "
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polyline
                fill="none"
                points="19,49 19,28 31,28   31,49 "
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polygon points="35,5 35,8.016 37,10.094 37,7 39,7 39,12.203 41,14.266 41,5 " />
              <polyline
                fill="none"
                points="  1.11,25.942 25,1.053 48.89,25.943 "
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </svg>
            Home
          </li>
          <li
            onClick={() => router.push("/astrologer-admin/call-history")}
            className={`${
              props.active === "call-history"
                ? "  border-red-500 bg-red-50  bg-opacity-50 text-red-500 "
                : "text-zinc-500 border-transparent"
            } py-3 border-r-4 px-6 w-full hover:border-red-500 hover:bg-red-50  hover:bg-opacity-50 hover:text-red-500 cursor-pointer font-semibold  text-lg flex items-center gap-5`}
          >
            <svg
              className="w-7 h-7 fill-current"
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
            Call History
          </li>
          <li
            onClick={() => router.push("/astrologer-admin/profile-view")}
            className={`${
              props.active === "profile"
                ? "  border-red-500 bg-red-50 bg-opacity-50 text-red-500"
                : "text-zinc-500 border-transparent"
            }  py-3 border-r-4 px-6 w-full hover:border-red-500 hover:bg-red-50  hover:bg-opacity-50 hover:text-red-500 font-semibold cursor-pointer text-lg flex items-center gap-5`}
          >
            <svg
              version="1.1"
              viewBox="0 0 50 50"
              className="w-7 h-7 fill-current"
            >
              <g id="Layer_1">
                <path d="M25,1C11.767,1,1,11.767,1,25c0,7.091,3.094,13.472,8,17.869v0.017l0.348,0.3c0.061,0.053,0.128,0.097,0.19,0.149   c0.431,0.364,0.875,0.713,1.331,1.047c0.123,0.09,0.246,0.177,0.371,0.264c0.484,0.34,0.979,0.664,1.487,0.968   c0.085,0.051,0.172,0.099,0.257,0.148c0.557,0.324,1.126,0.629,1.71,0.908c0.006,0.003,0.012,0.005,0.018,0.008   c1.249,0.595,2.559,1.082,3.915,1.456c0.025,0.007,0.05,0.015,0.075,0.021c0.641,0.175,1.293,0.322,1.954,0.443   c0.062,0.011,0.123,0.022,0.185,0.033c0.638,0.112,1.284,0.201,1.939,0.262c0.075,0.007,0.15,0.011,0.224,0.017   C23.663,48.965,24.327,49,25,49s1.337-0.035,1.996-0.09c0.075-0.006,0.15-0.01,0.224-0.017c0.655-0.06,1.301-0.15,1.939-0.262   c0.062-0.011,0.123-0.022,0.185-0.033c0.661-0.121,1.313-0.268,1.954-0.443c0.025-0.007,0.05-0.014,0.075-0.021   c1.356-0.374,2.666-0.861,3.915-1.456c0.006-0.003,0.012-0.005,0.018-0.008c0.584-0.279,1.153-0.585,1.71-0.908   c0.086-0.05,0.172-0.097,0.257-0.148c0.509-0.304,1.004-0.629,1.487-0.968c0.124-0.087,0.248-0.174,0.371-0.264   c0.456-0.334,0.9-0.683,1.331-1.047c0.062-0.052,0.129-0.096,0.19-0.149l0.348-0.3v-0.017c4.906-4.398,8-10.778,8-17.869   C49,11.767,38.233,1,25,1z M25,25c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S29.411,25,25,25z M28,27c6.065,0,11,4.935,11,11   v3.958c-0.042,0.035-0.086,0.067-0.128,0.102c-0.395,0.321-0.8,0.626-1.214,0.918c-0.092,0.065-0.182,0.132-0.274,0.195   c-0.447,0.305-0.906,0.591-1.373,0.862c-0.085,0.05-0.171,0.099-0.257,0.148c-0.49,0.275-0.989,0.533-1.498,0.769   c-0.053,0.025-0.107,0.049-0.161,0.073c-1.661,0.755-3.411,1.302-5.212,1.626c-0.057,0.01-0.114,0.021-0.171,0.031   c-0.567,0.097-1.139,0.172-1.715,0.225c-0.079,0.007-0.159,0.012-0.239,0.018C26.175,46.97,25.589,47,25,47   s-1.175-0.03-1.758-0.077c-0.079-0.006-0.159-0.011-0.239-0.018c-0.576-0.053-1.148-0.127-1.715-0.225   c-0.057-0.01-0.114-0.02-0.171-0.031c-1.801-0.324-3.551-0.871-5.212-1.626c-0.054-0.025-0.108-0.048-0.161-0.073   c-0.509-0.236-1.008-0.494-1.498-0.769c-0.086-0.049-0.171-0.098-0.257-0.148c-0.467-0.27-0.926-0.557-1.373-0.862   c-0.093-0.063-0.183-0.13-0.274-0.195c-0.414-0.292-0.819-0.596-1.214-0.918c-0.042-0.034-0.086-0.067-0.128-0.102V38   c0-6.065,4.935-11,11-11H28z M41,40.076V38c0-6.271-4.464-11.519-10.38-12.735C33.261,23.464,35,20.431,35,17   c0-5.514-4.486-10-10-10s-10,4.486-10,10c0,3.431,1.739,6.464,4.38,8.265C13.464,26.481,9,31.729,9,38v2.076   C5.284,36.135,3,30.831,3,25C3,12.869,12.869,3,25,3s22,9.869,22,22C47,30.831,44.716,36.135,41,40.076z" />
              </g>
              <g />
            </svg>
            Profile
          </li>
        </ul>
        <button
          onClick={() => localstorage.removeItem("astrologerSignup")}
          className="flex md:hidden   mt-auto w-full hover:bg-zinc-800  py-3 px-5  font-semibold text-zinc-600 hover:text-zinc-100 items-center justify-between"
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
    </div>
  );
}
