import { useRouter } from "next/router";
import React, { useState } from "react";

export default function AddWalletMoney() {
  const [amount, setamount] = useState();

  const handleInput = (e) => {
    console.log(e);
  };
  const router = useRouter();
  return (
    <div className="py-32 px-5 bg-zinc-50">
      <div className="flex flex-col gap-10 max-w-lg text-center mx-auto">
        <h1>Add Money to Wallet </h1>
        <div className="text-lg px-5 mx-auto font-semibold  shadow-md shadow-green-200/20 text-green-500 bg-white border-2 border-green-500 py-2 rounded-md  max-w-[280px] text-center w-full">
          Available balance: ₹ 0
        </div>
      </div>

      <div className="max-w-md gap-5 mx-auto items-end mt-12 flex">
        <div className="w-full relative  flex  flex-col gap-3 ">
          <input
            type="number"
            value={amount}
            onChange={handleInput}
            id="amount"
            min={1}
            name="amount"
            className={`w-full outline-none st bg-transparent  text-zinc-800  border-b-2 focus:border-green-500  border-zinc-500 pt-3 pb-2   `}
            placeholder=" "
          />
          <label
            htmlFor="amount"
            className="whitespace-nowrap labelt text-zinc-800 text-base  "
          >
            Enter Amount in INR
          </label>
        </div>
        <button
          onClick={() => router.push("/payment")}
          className="bg-green-500 max-w-[120px] hover:bg-green-600 w-full text-white p-2.5  rounded-md hover:shadow-lg hover:scale-[1.05] transition duration-150 ease-in font-bold"
        >
          Proceed
        </button>
      </div>
      <div className="text-center font-semibold text-xl py-14"> OR</div>
      <div className="max-w-7xl  mx-auto px-5 flex flex-col gap-20">
        <h4 className="text-zinc-800 text-center">
          Choose from the available recharge pack
        </h4>
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 w-full max-w-4xl gap-10 mx-auto">
          <button className="flex max-w-[270px] md:max-w-full  mx-auto w-full bg-white relative overflow-hidden items-center   flex-col gap-2 py-6 px-9 shadow-md rounded-md hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
            <span className="absolute skew-y-[-25deg] top-2.5 -left-7 uppercase font-semibold text-[10px] py-1 px-10 bg-red-500 text-white">
              15% extra
            </span>
            <span className="font-semibold text-xl">₹ 10</span>
            <span className="flex gap-2 text-sm text-zinc-600">
              Recharge and get
              <b className="font-semibold text-zinc-800">₹ 100</b>
            </span>
          </button>
          <button className="flex max-w-[270px] md:max-w-full w-full mx-auto bg-white relative overflow-hidden items-center   flex-col gap-2 py-6 px-9 shadow-md rounded-md hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
            <span className="absolute skew-y-[-25deg] top-2.5 -left-7 uppercase font-semibold text-[10px] py-1 px-10 bg-red-500 text-white">
              15% extra
            </span>
            <span className="font-semibold text-xl">₹ 10</span>
            <span className="flex gap-2 text-sm text-zinc-600">
              Recharge and get
              <b className="font-semibold text-zinc-800">₹ 100</b>
            </span>
          </button>
          <button className="flex max-w-[270px] md:max-w-full w-full mx-auto bg-white relative overflow-hidden items-center   flex-col gap-2 py-6 px-9 shadow-md rounded-md hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
            <span className="absolute skew-y-[-25deg] top-2.5 -left-7 uppercase font-semibold text-[10px] py-1 px-10 bg-red-500 text-white">
              15% extra
            </span>
            <span className="font-semibold text-xl">₹ 10</span>
            <span className="flex gap-2 text-sm text-zinc-600">
              Recharge and get
              <b className="font-semibold text-zinc-800">₹ 100</b>
            </span>
          </button>
          <button className="flex max-w-[270px] md:max-w-full w-full mx-auto bg-white relative overflow-hidden items-center   flex-col gap-2 py-6 px-9 shadow-md rounded-md hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
            <span className="absolute skew-y-[-25deg] top-2.5 -left-7 uppercase font-semibold text-[10px] py-1 px-10 bg-red-500 text-white">
              15% extra
            </span>
            <span className="font-semibold text-xl">₹ 10</span>
            <span className="flex gap-2 text-sm text-zinc-600">
              Recharge and get
              <b className="font-semibold text-zinc-800">₹ 100</b>
            </span>
          </button>
          <button className="flex max-w-[270px] md:max-w-full w-full mx-auto bg-white relative overflow-hidden items-center   flex-col gap-2 py-6 px-9 shadow-md rounded-md hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
            <span className="absolute skew-y-[-25deg] top-2.5 -left-7 uppercase font-semibold text-[10px] py-1 px-10 bg-red-500 text-white">
              15% extra
            </span>
            <span className="font-semibold text-xl">₹ 10</span>
            <span className="flex gap-2 text-sm text-zinc-600">
              Recharge and get
              <b className="font-semibold text-zinc-800">₹ 100</b>
            </span>
          </button>
          <button className="flex max-w-[270px] md:max-w-full w-full mx-auto bg-white relative overflow-hidden items-center   flex-col gap-2 py-6 px-9 shadow-md rounded-md hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
            <span className="absolute skew-y-[-25deg] top-2.5 -left-7 uppercase font-semibold text-[10px] py-1 px-10 bg-red-500 text-white">
              15% extra
            </span>
            <span className="font-semibold text-xl">₹ 10</span>
            <span className="flex gap-2 text-sm text-zinc-600">
              Recharge and get
              <b className="font-semibold text-zinc-800">₹ 100</b>
            </span>
          </button>
          <button className="flex max-w-[270px] md:max-w-full w-full mx-auto bg-white relative overflow-hidden items-center   flex-col gap-2 py-6 px-9 shadow-md rounded-md hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
            <span className="absolute skew-y-[-25deg] top-2.5 -left-7 uppercase font-semibold text-[10px] py-1 px-10 bg-red-500 text-white">
              15% extra
            </span>
            <span className="font-semibold text-xl">₹ 10</span>
            <span className="flex gap-2 text-sm text-zinc-600">
              Recharge and get
              <b className="font-semibold text-zinc-800">₹ 100</b>
            </span>
          </button>
          <button className="flex max-w-[270px] md:max-w-full w-full mx-auto bg-white relative overflow-hidden items-center   flex-col gap-2 py-6 px-9 shadow-md rounded-md hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
            <span className="absolute skew-y-[-25deg] top-2.5 -left-7 uppercase font-semibold text-[10px] py-1 px-10 bg-red-500 text-white">
              15% extra
            </span>
            <span className="font-semibold text-xl">₹ 10</span>
            <span className="flex gap-2 text-sm text-zinc-600">
              Recharge and get
              <b className="font-semibold text-zinc-800">₹ 100</b>
            </span>
          </button>
          <button className="flex max-w-[270px] md:max-w-full w-full mx-auto bg-white relative overflow-hidden items-center   flex-col gap-2 py-6 px-9 shadow-md rounded-md hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
            <span className="absolute skew-y-[-25deg] top-2.5 -left-7 uppercase font-semibold text-[10px] py-1 px-10 bg-red-500 text-white">
              15% extra
            </span>
            <span className="font-semibold text-xl">₹ 10</span>
            <span className="flex gap-2 text-sm text-zinc-600">
              Recharge and get
              <b className="font-semibold text-zinc-800">₹ 100</b>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
