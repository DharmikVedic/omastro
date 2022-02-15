import React, { useEffect, useRef, useState } from "react";
import { BlurBackground } from "../utils/feature";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export default function CombineForm(props) {
  const [state, setstate] = useState("login");

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      props.passactive(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  const handleClose = () => {
    props.passactive(true);
  };
  return (
    <>
      <div
        ref={ref}
        className={`${props.transition} max-w-md px-5 w-full z-30 -translate-x-1/2 shadow-xl fixed top-1/2 left-1/2`}
      >
        <div className="flex">
          <button
            onClick={() => setstate("login")}
            className={`${
              state === "login"
                ? "bg-blue-500  text-white"
                : "text-zinc-500 bg-zinc-50"
            } font-semibold text-lg  w-full p-3`}
          >
            Sign In
          </button>
          <button
            onClick={() => setstate("signup")}
            className={`${
              state === "signup"
                ? "bg-blue-500  text-white"
                : "text-zinc-500 bg-zinc-50"
            } font-semibold text-lg  w-full p-3`}
          >
            Sign Up
          </button>
        </div>
        <div>
          {state === "login" ? (
            <LoginForm passactive={handleClose} />
          ) : (
            <RegisterForm passactive={handleClose} />
          )}
        </div>
      </div>
    </>
  );
}
