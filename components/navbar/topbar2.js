import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Topbar2() {
  const router = useRouter();
  const [astrologer, setastrologer] = useState(null);
  const url = router.asPath.split("/")[1];
  useEffect(() => {
    const d = localStorage.getItem("astrologerSignup");
    if (d !== null) {
      setastrologer(JSON.parse(d));
    }
  }, []);
  return (
    <div className=" w-full fixed  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-50 top-0 left-0  px-5  ">
      <div className="max-w-7xl w-full mx-auto flex justify-between py-2">
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
        <ul className="md:flex gap-10 text-lg text-zinc-800 items-center  hidden">
          <li className={`${url === "" ? "text-rose-500" : "text-zinc-800"} `}>
            <Link href="/astrologer-admin">
              <a className="hover:text-rose-500 py-7 font-semibold  rounded-full cursor-pointer">
                Home
              </a>
            </Link>
          </li>
          <li className={`${url === "" ? "text-rose-500" : "text-zinc-800"} `}>
            <Link href="/">
              <a className="hover:text-rose-500 py-7 font-semibold  rounded-full cursor-pointer">
                Call History
              </a>
            </Link>
          </li>

          {astrologer !== null ? (
            <div className="relative group py-2 cursor-default">
              <div className="border-2  shadow-lg shadow-red-300/30 border-red-500 text-sm text-red-500 font-semibold py-1 px-4 rounded-md">
                {astrologer?.name}
                <button
                  onClick={() => {
                    localStorage.removeItem("astrologerSignup");
                    router.reload();
                  }}
                  className="group-hover:opacity-100 cursor-pointer group-hover:visible invisible opacity-0 absolute top-full left-0  py-2 px-7 bg-zinc-100 rounded-md text-zinc-800 "
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <li
              onClick={() => setlogin(true)}
              className="font-semibold cursor-pointer"
            >
              Login
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
