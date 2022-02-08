import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Mobilenav from "./mobilenav";

function Topnav() {
  const router = useRouter();
  const [displaymenu, setdisplamenu] = useState();
  const url = router.asPath.split("/")[1];
  const [y, sety] = useState(false);
  const [mouted, setmouted] = useState(false);

  useEffect(() => {
    setmouted(true);
    if (mouted) {
      window.addEventListener("scroll", (e) => handleNavigation(e));
      const handleNavigation = (e) => {
        const window1 = e.currentTarget;
        const scroll =
          window1.pageYOffset || document.documentElement.scrollTop;
        if (scroll > 130) {
          sety(true);
        } else {
          sety(false);
        }
      };
    }
    return () => {
      setmouted(false);
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [mouted]);

  const handleclose = (e) => {
    setdisplamenu((prev) => !prev);
  };
  return (
    <>
      <Mobilenav
        transition={
          displaymenu
            ? "translate-x-0 opacity-100 visible"
            : "transplate-x-[300px] opacity-0 invisible "
        }
        passclose={handleclose}
      />
      <div
        className={`${
          y
            ? "bg-white shadow-sm border-b border-zinc-200"
            : `${
                url === ""
                  ? " border-b border-zinc-200 md:border-transparent"
                  : "border-b border-zinc-200 bg-white"
              }`
        } fixed w-full z-20 top-0 px-5 `}
      >
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
            <div className="border items-center flex gap-4 shadow-md shadow-red-400/20 border-red-500 md:hidden  py-1.5 px-2 rounded-md text-zinc-800 font-bold">
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
              ₹ 50
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
            <ul className="md:flex gap-10 text-lg text-zinc-800  hidden">
              <li
                className={`${url === "" ? "text-rose-500" : "text-zinc-800"} `}
              >
                <Link href="/">
                  <a className="hover:text-rose-500 py-7 font-semibold  rounded-full cursor-pointer">
                    Home
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  url === "talktoastrologer" ? "text-rose-500" : "text-zinc-800"
                } `}
              >
                <Link href="/talktoastrologer">
                  <a className="group-hover:text-rose-500 py-4 font-semibold  rounded-full cursor-pointer">
                    Talk To Astrologer
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topnav;
