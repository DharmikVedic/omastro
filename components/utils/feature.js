import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export function BlurBackground() {
  return (
    <div className="fixed z-10 bg-gray-700 opacity-70 w-full h-full top-0 left-0"></div>
  );
}

export function RechargeWallet(props) {
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
  const router = useRouter();
  return (
    <>
      <div
        ref={ref}
        className={`${props.transition} top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-md duration-200 ease-in  shadow-md  bg-white p-7 rounded-md fixed z-10  mx-auto`}
      >
        <div
          style={{ lineHeight: 1.7 }}
          className="md:text-lg flex text-zinc-800 flex-col gap-7 font-semibold"
        >
          Minimum balance of 5 minutes (INR 125.0) is required to start call
          <div className="flex gap-7">
            <button
              onClick={() => props.passactive(true)}
              className="p-1.5  font-bold border-2 rounded-full border-red-300 text-red-300 hover:text-red-500 hover:border-red-500 w-full"
            >
              Cancel
            </button>
            <button
              onClick={() => router.push("/add-wallet-money")}
              className="p-1.5 hover:bg-green-600 hover:scale-[1.1] transition duration-150 ease-in font-bold rounded-full bg-green-500 text-white w-full"
            >
              Recharge
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
