const astrologer = require("../../components/jsondata/astrologerdata.json");
import React from "react";
import { color } from ".";

export async function getStaticPaths() {
  let paths = [];
  astrologer.astrologer.map((item) => {
    paths.push({
      params: { slug: item.name.split(" ").join("").toLowerCase() },
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      data: astrologer.astrologer.filter(
        (item) => item.name.split(" ").join("").toLowerCase() === params.slug
      ),
    },
  };
}

export default function Astrologer({ data }) {
  const obj = {
    name: "gopal",
    lang: ["hindi", "english"],
    exp: "15",
    gender: "male",
    price: "36",
    key: ["vastu", "numerology", "vedic", "nadi"],
  };
  return (
    <div className="py-40 bg-zinc-50 px-5">
      <div className="bg-white flex flex-col gap-12 md:gap-20 max-w-5xl mx-auto shadow-lg rounded-[20px] md:px-10 px-5 py-8 md:py-16">
        <div className=" flex gap-12 md:gap-20 md:flex-row flex-col items-center">
          <div className="md:w-[350px] w-[270px] md:h-auto h-[270px]">
            <img
              src={data[0].imgs}
              className="w-full rounded-full h-full object-cover"
              alt="astrologer"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h2 className="capitalize">{data[0].name}</h2>
            <div className="flex gap-10 mt-2">
              <span className="flex gap-2 justify-around text-lg font-semibold text-zinc-800 items-center">
                <svg
                  className="w-6 h-6 fill-zinc-800"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <g data-name="1" id="_1">
                    <path d="M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z" />
                    <path d="M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z" />
                    <path d="M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z" />
                  </g>
                </svg>
                207 mins
              </span>
              <span className="flex gap-2 text-lg font-semibold items-center">
                <svg
                  className="w-5 h-5 fill-zinc-800"
                  id="time-duration-clock-notification"
                  version="1.1"
                  viewBox="0 0 14 15"
                >
                  <path d="M12.5,1H14V0h-1.5h-11H0v1h1.5v2.707L5.293,7.5L1.5,11.293V14H0v1h1.5h1.293h8.414H12.5H14v-1h-1.5v-2.707L8.707,7.5  L12.5,3.707V1z M5.207,14L7,12.207L8.793,14H5.207z M11.5,3.293L7.293,7.5l4.207,4.207V14h-1.293L7,10.793L3.793,14H2.5v-2.293  L6.707,7.5L2.5,3.293V1h9V3.293z" />
                </svg>
                5 min
              </span>
            </div>
            <div className="flex gap-4 overflow-x-scroll w-full py-1">
              {data[0].key.map((item, i) => (
                <span
                  key={i}
                  className={`capitalize px-3 py-1 text-[16px] rounded-md text-sm font-semibold ${
                    color[item.toLowerCase()]
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-3 text-zinc-800 overflow-x-scroll w-full py-1">
              <span className="font-semibold">Lang:</span>
              {data[0].lang.map((item, i) => (
                <span
                  key={i}
                  className={`capitalize  ${color[item.toLowerCase()]}`}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="text-zinc-800 font-semibold">
              Exp: <span className="font-normal">{data[0].exp} Years</span>
            </div>
            <button className="mt-2 max-w-xs gap-10 w-full hover:bg-green-600 hover:scale-[1.1] transition-all duration-150 ease-in bg-green-500 items-center justify-between  flex  py-3 px-6 rounded-full text-white font-bold text-lg">
              <svg
                viewBox="0 0 48 48"
                className="w-7  h-7 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h48v48h-48z" fill="none" />
                <path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" />
              </svg>
              Call Now <span>₹{data[0].price}/min</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 border-t border-zinc-200 pt-10 md:pt-14">
          <h3 className="mx-auto">About Gopal</h3>
          <p className="max-w-3xl sm:tetx-base text-sm leading-7 mx-auto text-center">
            Dummy astrologer is an Expert KP Astrologer with 15 years of
            Experience in Professional Astrology Consultancy. He also knows
            Numerology & Vedic Astrology As Well. He can speak Hindi, Bengali
            and English language for phone consultation. You can consult him for
            KP Astrology for your marriage life problems, late marriage, Love
            marriage or arrange marriage prediction, Government Job predictions,
            Future predictions. Just click on Call button to Consult Acharya
            Suvendu Sabitri now.
          </p>
        </div>
      </div>
    </div>
  );
}
