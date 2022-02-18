import React from "react";
import Sidebar from "../../components/navbar/commonAstrologerPage";

export default function CallHistory() {
  return (
    <>
      <Sidebar active="call-history">
        <div className="w-full h-screen  overflow-y-scroll bg-gray-50 px-5 md:px-10 py-20  md:py-12">
          <div className="flex flex-col gap-10 mt-8 md:mt-0">
            <h3>Call History</h3>
            <div className="max-w-xl gap-6 p-5 md:px-10 py-4 flex flex-col">
              <div className="flex border-2 border-green-400 p-5 rounded-lg bg-white relative py-6 flex-col gap-2 ">
                <span className="absolute top-4 right-4">
                  <img
                    src="/imgs/sucess2.png"
                    className="w-5 h-5"
                    alt="success"
                  />
                </span>
                <span className="md:text-2xl  text-xl font-semibold">
                  Raj shah
                </span>
                <div className="flex gap-6 mt-1">
                  <p className="flex gap-1 font-semibold items-center">
                    Date:
                    <span className=" font-normal">03/10/2022</span>
                  </p>
                  <p className="flex gap-1 font-semibold items-center">
                    Time:
                    <span className=" font-normal">05:23 AM</span>
                  </p>
                </div>
                <div className="flex gap-x-6 gap-2 sm:flex-row flex-col">
                  <p className="flex gap-1 font-semibold items-center">
                    Duration:
                    <span className=" font-normal">05:00 Min</span>
                  </p>
                  <p className="flex gap-1 font-semibold items-center">
                    Deduction Amount:
                    <span className=" font-normal">₹ 125</span>
                  </p>
                </div>
              </div>
              <div className="flex border-2 border-red-300 p-5 rounded-lg bg-white relative py-6 flex-col gap-2 ">
                <span className="absolute top-4 right-4">
                  <img
                    src="/imgs/cancel.png"
                    className="w-5 h-5"
                    alt="success"
                  />
                </span>
                <span className="md:text-2xl  text-xl font-semibold">
                  Raj shah
                </span>
                <div className="flex gap-6 mt-1">
                  <p className="flex gap-1 font-semibold items-center">
                    Date:
                    <span className=" font-normal">03/10/2022</span>
                  </p>
                  <p className="flex gap-1 font-semibold items-center">
                    Time:
                    <span className=" font-normal">05:23 AM</span>
                  </p>
                </div>
                <div className="flex gap-x-6 gap-2 sm:flex-row flex-col">
                  <p className="flex gap-1 font-semibold items-center">
                    Duration:
                    <span className=" font-normal">05:00 Min</span>
                  </p>
                  <p className="flex gap-1 font-semibold items-center">
                    Deduction Amount:
                    <span className=" font-normal">₹ 125</span>
                  </p>
                </div>
              </div>
              <div className="flex border border-green-400 p-5 rounded-lg bg-white relative py-6 flex-col gap-2 ">
                <span className="absolute top-4 right-4">
                  <img
                    src="/imgs/sucess2.png"
                    className="w-5 h-5"
                    alt="success"
                  />
                </span>
                <span className="md:text-2xl  text-xl font-semibold">
                  Raj shah
                </span>
                <div className="flex gap-6 mt-1">
                  <p className="flex gap-1 font-semibold items-center">
                    Date:
                    <span className=" font-normal">03/10/2022</span>
                  </p>
                  <p className="flex gap-1 font-semibold items-center">
                    Time:
                    <span className=" font-normal">05:23 AM</span>
                  </p>
                </div>
                <div className="flex gap-x-6 gap-2 sm:flex-row flex-col">
                  <p className="flex gap-1 font-semibold items-center">
                    Duration:
                    <span className=" font-normal">05:00 Min</span>
                  </p>
                  <p className="flex gap-1 font-semibold items-center">
                    Deduction Amount:
                    <span className=" font-normal">₹ 125</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
