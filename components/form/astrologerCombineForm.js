import React, { useEffect, useRef, useState } from "react";
import AstrologerLogin from "./astrologerLoginForm";
import AstrologerForm from "./astrologerSignupForm";

export default function AstrologerCombineForm(props) {
  const [state, setstate] = useState("login");

  //   const ref = useRef(null);
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       props.passactive(true);
  //     }
  //   };

  //   useEffect(() => {
  //     document.addEventListener("click", handleClickOutside, true);
  //     return () => {
  //       document.removeEventListener("click", handleClickOutside, true);
  //     };
  //   });
  //   const handleClose = () => {
  //     props.passactive(true);
  //   };
  return (
    <>
      <div className={`  max-w-md w-full py-5 mx-auto`}>
        <div className="flex">
          <button
            onClick={() => setstate("login")}
            className={`${
              state === "login"
                ? "bg-red-500  text-white"
                : "text-zinc-500 bg-zinc-50"
            } font-semibold text-lg  w-full p-3`}
          >
            Sign In
          </button>
          <button
            onClick={() => setstate("signup")}
            className={`${
              state === "signup"
                ? "bg-red-500  text-white"
                : "text-zinc-500 bg-zinc-50"
            } font-semibold text-lg  w-full p-3`}
          >
            Sign Up
          </button>
        </div>
        <div>
          {state === "login" ? <AstrologerLogin /> : <AstrologerForm />}
        </div>
      </div>
    </>
  );
}
