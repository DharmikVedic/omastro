import React, { useEffect, useState } from "react";
import Sidebar from "../../components/navbar/commonAstrologerPage";
import { supabase } from "../../components/supabase/supaclient";

export default function CallHistory() {
  const [history, sethistory] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("astrologerSignup") !== null) {
      const data1 = JSON.parse(localStorage.getItem("astrologerSignup"));
      fetchdata(data1.email);
    }
  }, []);

  const fetchdata = async (email) => {
    const { data, error } = await supabase
      .from("currentHistory")
      .select("*")
      .eq("astrologeremail", email);
    sethistory(data);
  };

  return (
    <>
      <Sidebar active="call-history">
        <div className="w-full h-screen  overflow-y-scroll bg-gray-50 px-5 md:px-10 py-20  md:py-12">
          <div className="flex flex-col w-full gap-10 mt-8 md:mt-0">
            <h3>Call History</h3>
            <div className="flex w-full">
              {history.length > 0 ? (
                <div className="max-w-xl w-full gap-6 py-5 md:pr-10  flex flex-col">
                  {history.map((item, i) => (
                    <div
                      key={i}
                      className={`${
                        item.callstatus ? "border-green-400" : "border-red-400"
                      } flex border-2 w-full  p-5 rounded-lg bg-white relative py-6 flex-col gap-2`}
                    >
                      <span className="absolute top-4 right-4">
                        <img
                          src={`${
                            item.callstatus
                              ? "/imgs/sucess2.png"
                              : "/imgs/cancel.png"
                          }`}
                          className="w-5 h-5"
                          alt={`${item.callstatus ? "success" : "failed"}`}
                        />
                      </span>
                      <span className="capitalize text-2xl font-semibold">
                        {item?.name}{" "}
                      </span>
                      <div className="flex md:flex-row gap-y-2 flex-col gap-x-14 mt-1">
                        <p className="flex gap-1 font-semibold items-center">
                          Date:
                          <span className=" font-normal">
                            {item?.day < 10 ? `0${item?.day}` : `0${item?.day}`}
                            /
                            {item?.month < 10
                              ? `0${item?.month}`
                              : `0${item?.month}`}
                            /{item?.year}
                          </span>
                        </p>
                        <p className="flex gap-1 font-semibold items-center">
                          Time:
                          <span className=" font-normal">
                            {item?.hour < 10
                              ? `0${item?.hour}`
                              : `0${item?.hour}`}
                            :
                            {item?.min < 10 ? `0${item?.min}` : `0${item?.min}`}{" "}
                            {item?.hour > 12 ? "PM" : "AM"}
                          </span>
                        </p>
                      </div>
                      <div className="flex gap-x-14 gap-2 sm:flex-row flex-col">
                        <p className="flex gap-1 font-semibold items-center">
                          Duration:
                          <span className=" font-normal">
                            {item.duration} Min
                          </span>
                        </p>
                        <p className="flex gap-1 font-semibold items-center">
                          Deduction Amount:
                          <span className=" font-normal">₹ {item.price}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <h2 className="font-bold md:text-4xl text-3xl">
                    No data show
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
