import React from "react";
import Sidebar from "../../components/navbar/sidebar";

export default function CallHistory() {
  const userData = {
    isActive: true,
    place: "Susner, Madhya Pradesh",
    month: 2,
    min: 7,
    martial_status: "divorced",
    astrologerId: "abc@gopal",
    year: 2000,
    name: "dharmik rathod",
    topic_of_concern: "Education",
    country: "India",
    occupation: "bussiness/self employed",
    day: 3,
    gender: "male",
    hour: 5,
  };
  return (
    <div>
      <Sidebar active="call-history">
        <div className="w-full h-screen  overflow-y-scroll bg-gray-50 px-5 md:px-10 py-20 md:py-12">
          <div className="flex flex-col gap-10 ">
            <h3>Call History</h3>
            <div className="bg-white shadow-md max-w-lg p-5 md:px-10 py-4 flex flex-col  divide-y rounded-md">
              <div className="flex relative py-6 flex-col gap-2 ">
                <span className="absolute top-3 right-2">
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
              <div className="flex relative py-6 flex-col gap-2 ">
                <span className="absolute top-3 right-2">
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
              <div className="flex relative py-6 flex-col gap-2 ">
                <span className="absolute top-3 right-2">
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
    </div>
  );
}
