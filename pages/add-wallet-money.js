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
      <h1 className="px-5 text-center">Add Money to Wallet </h1>

      <div className=" px-5 py-5 mt-10 shadow-md shadow-zinc-200/30 bg-white rounded-[20px] flex md:flex-row flex-col gap-20 max-w-7xl mx-auto">
        <div className="w-full md:w-3/5 py-5">
          <div className="max-w-md  gap-5 mx-auto items-end mt-12 flex">
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
          <div className="text-center font-semibold text-xl py-10"> OR</div>
          <div className="max-w-7xl  mx-auto flex flex-col md:px-5 gap-16">
            <h4 className="text-zinc-800 leading-9 text-center">
              Choose from the available recharge pack
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
              <button className="flex text-zinc-800 shadow-zinc-200/30 mx-auto w-full bg-indigo-100 relative overflow-hidden items-center  justify-between gap-7 py-7 px-7 shadow-md rounded-xl hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
                <div className="flex flex-col font-semibold gap-2 whitespace-nowrap">
                  <span className="flex gap-2 text-sm text-zinc-700">
                    Recharge and get
                    <b className="font-semibold text-zinc-800 whitespace-nowrap">
                      ₹ 100
                    </b>
                  </span>
                  <span className="text-xs font-semibold py-1 px-6 max-w-max text-white bg-indigo-500 rounded-full">
                    15% Extra
                  </span>
                </div>
                <span className="font-bold text-xl  whitespace-nowrap">
                  ₹ 10
                </span>
              </button>
              <button className="flex text-zinc-800 shadow-zinc-200/30 mx-auto w-full bg-green-100 relative overflow-hidden items-center  justify-between gap-7 py-7 px-7 shadow-md rounded-xl hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
                <div className="flex flex-col gap-2 whitespace-nowrap">
                  <span className="flex gap-2 font-semibold text-sm text-zinc-700">
                    Recharge and get
                    <b className="font-semibold text-zinc-800 whitespace-nowrap">
                      ₹ 100
                    </b>
                  </span>
                  <span className="text-xs font-semibold py-1 px-6 max-w-max text-white bg-green-500 rounded-full">
                    15% Extra
                  </span>
                </div>

                <span className="font-bold text-xl whitespace-nowrap">
                  ₹ 10
                </span>
              </button>
              <button className="flex text-zinc-800 mx-auto w-full bg-cyan-50 relative overflow-hidden items-center  justify-between gap-7 py-7 px-7 shadow-md shadow-zinc-200/30  rounded-xl hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
                <div className="flex flex-col gap-2 whitespace-nowrap">
                  <span className="flex gap-2 font-semibold text-sm text-zinc-700">
                    Recharge and get
                    <b className="font-semibold whitespace-nowrap">₹ 100</b>
                  </span>
                  <span className="text-xs font-semibold py-1 px-6 max-w-max text-white bg-cyan-400 rounded-full">
                    15% Extra
                  </span>
                </div>

                <span className="font-bold text-xl whitespace-nowrap">
                  ₹ 10
                </span>
              </button>
              <button className="flex text-zinc-800 shadow-zinc-200/30 mx-auto w-full bg-pink-100 relative overflow-hidden items-center  justify-between gap-7 py-7 px-7 shadow-md rounded-xl hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
                <div className="flex flex-col gap-2 whitespace-nowrap">
                  <span className="flex gap-2 text-sm font-semibold text-zinc-700">
                    Recharge and get
                    <b className="font-semibold text-zinc-800 whitespace-nowrap">
                      ₹ 100
                    </b>
                  </span>
                  <span className="text-xs font-semibold py-1 px-6 max-w-max text-white bg-pink-500 rounded-full">
                    15% Extra
                  </span>
                </div>

                <span className="font-bold text-xl whitespace-nowrap">
                  ₹ 10
                </span>
              </button>
              <button className="flex text-zinc-800 shadow-zinc-200/30 mx-auto w-full bg-purple-100 relative overflow-hidden items-center  justify-between gap-7 py-7 px-7 shadow-md rounded-xl hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
                <div className="flex flex-col gap-2 whitespace-nowrap">
                  <span className="flex gap-2 font-semibold text-sm text-zinc-700">
                    Recharge and get
                    <b className="font-semibold text-zinc-800 whitespace-nowrap">
                      ₹ 100
                    </b>
                  </span>
                  <span className="text-xs font-semibold py-1 px-6 max-w-max text-white bg-purple-500 rounded-full">
                    15% Extra
                  </span>
                </div>

                <span className="font-bold text-xl whitespace-nowrap">
                  ₹ 10
                </span>
              </button>
              <button className="flex text-zinc-800 shadow-zinc-200/30 mx-auto w-full bg-red-100 relative overflow-hidden items-center  justify-between gap-7 py-7 px-7 shadow-md rounded-xl hover:shadow-xl hover:scale-[1.05] transition duration-150 ease-in">
                <div className="flex flex-col gap-2 whitespace-nowrap">
                  <span className="flex gap-2 font-semibold text-sm text-zinc-700">
                    Recharge and get
                    <b className="font-semibold text-zinc-800 whitespace-nowrap">
                      ₹ 100
                    </b>
                  </span>
                  <span className="text-xs font-semibold py-1 px-6 max-w-max text-white bg-red-500 rounded-full">
                    15% Extra
                  </span>
                </div>

                <span className="font-bold text-xl whitespace-nowrap">
                  ₹ 10
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full my-auto shadow-md bg-slate-50 rounded-[20px] md:w-2/5 px-5 py-20 flex flex-col gap-14">
          <div className="text-xl flex items-center gap-3 md:gap-5 px-5 mx-auto font-semibold  shadow-md shadow-green-200/20 text-green-500 bg-white border-2 border-green-500 py-2 rounded-md  max-w-xs text-center w-full">
            <svg
              id="Layer_1"
              version="1.1"
              viewBox="0 0 48 48"
              className="w-9 h-9 fill-green-500"
            >
              <path
                clipRule="evenodd"
                d="M47,40L47,40c0,2.762-2.238,5-5,5l0,0H6l0,0c-2.762,0-5-2.238-5-5V11  c0-2.209,1.791-4,4-4l0,0h20.171l8.099-2.934c0.513-0.187,1.081,0.078,1.268,0.589L35.391,7H39c2.209,0,4,1.791,4,4v2l0,0  c2.209,0,4,1.791,4,4V40z M5,9L5,9c-1.104,0-2,0.896-2,2s0.896,2,2,2h3.445l0,0h0.189c0.013-0.005,0.021-0.016,0.034-0.021L19.65,9  H5z M34.078,9.181l-1.062-2.924l-0.001,0v0L30.964,7h0.003l-5.514,2h-0.01l-11.039,4h21.062L34.078,9.181z M41,11  c0-1.104-0.896-2-2-2h-2.883l1.454,4H41l0,0V11z M43,15H5l0,0c-0.732,0-1.41-0.211-2-0.555V40c0,1.657,1.344,3,3,3h36  c1.657,0,3-1.343,3-3v-7h-4c-2.209,0-4-1.791-4-4s1.791-4,4-4h4v-8C45,15.896,44.104,15,43,15z M45,31v-4h-4c-1.104,0-2,0.896-2,2  s0.896,2,2,2H45z M41,28h2v2h-2V28z"
                fillRule="evenodd"
              />
            </svg>
            Available balance: ₹ 0
          </div>
          <div className="border border-zinc-500 divide-gray-200 rounded-md divide-y">
            <div className="flex justify-between items-center py-5 px-5">
              <span>Total Amount</span>₹ 251
            </div>
            <div className="flex justify-between items-center py-5 px-5">
              <span>GST @ 18% </span>+ ₹ 45.18
            </div>
            <div className="flex rounded-b-md bg-green-100 font-semibold justify-between items-center py-5 px-5">
              <span>Total Payable Amount </span>₹ 296.18
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center text-zinc-600">
            <button className="py-3 px-10 bg-green-500 hover:scale-[1.02] duration-150 ease-in hover:bg-green-600 rounded-full text-xl font-bold text-white">
              Proceed to pay
            </button>
            <span>Money will be added to your wallet</span>
          </div>
        </div>
      </div>
    </div>
  );
}
