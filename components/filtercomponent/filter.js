import React, { useEffect, useRef, useState } from "react";

export default function Filter(props) {
  const [active, setactive] = useState("skill");

  const gender = ["male", "female"];

  //   const language = [
  //     "Arabic",
  //     "Assamese",
  //     "Bengali",
  //     "Bhojpuri",
  //     "Bodo",
  //     "Dutch",
  //     "English",
  //     "French",
  //     "German",
  //     "Gujarati",
  //     "Hindi",
  //     "Kannada",
  //     "Kashmiri",
  //     "Konkani",
  //     "Maithili",
  //     "Malayalam",
  //     "Manipuri",
  //     "Marathi",
  //     "Marwari",
  //     "Nepali",
  //     "Odia",
  //     "Punjabi",
  //     "Sanskrit",
  //     "Sindhi",
  //     "Spanish",
  //     "Tamil",
  //     "Telugu",
  //     "Urdu",
  //   ];

  //   const category = [
  //     "Career And Business",
  //     "Child Birth",
  //     "Education",
  //     "Family Life",
  //     "Foreign Travel",
  //     "Health",
  //     "Legal Matters",
  //     "Love & Relationship",
  //     "Marriage",
  //     "Mental Health",
  //     "Remedies",
  //     "Shubh Muhurta",
  //     "Stock Market",
  //     "Wealth And Property",
  //   ];
  //   const skill = [
  //     "Cartomancy",
  //     "Face Reading",
  //     "Horary",
  //     "Kp",
  //     "Lal Kitab",
  //     "Life Coach",
  //     "Loshu Grid",
  //     "Nadi",
  //     "Numerology",
  //     "Palmistry",
  //     "Prashana",
  //     "Psychic",
  //     "Psychologist",
  //     "Tarot",
  //     "Vastu",
  //     "Vedic",
  //     "Western",
  //   ];

  const [activelanguage, setactivelanguage] = useState(props.activelanguage);

  //   const [activecategory, setactivecategory] = useState(category);
  const [activegender, setactivegender] = useState(props.activegender);
  const [activeskill, setactiveskill] = useState(props.activeskill);

  const handleFilter = (e) => {
    if (
      activegender.every((i) => i === "") ||
      activelanguage.every((j) => j === "") ||
      activeskill.every((k) => k === "")
    ) {
      alert("please select atleast one value");
    } else {
      props.passactive(true);
      props.passfilter({
        skill: activeskill,
        language: activelanguage,
        gender: activegender,
      });
    }
  };

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

  console.log(activeskill);

  return (
    <>
      <div
        ref={ref}
        className="bg-white z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full shadow-xl rounded-md"
      >
        <div className="flex py-3 text-sm items-center text-zinc-600 font-semibold  px-5  justify-between border-b pb-2">
          FILTERS
          <button onClick={() => props.passactive(true)}>
            <svg
              className="w-9 h-9  fill-zinc-600"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <g data-name="1" id="_1">
                <path d="M257,461.46c-114,0-206.73-92.74-206.73-206.73S143,48,257,48s206.73,92.74,206.73,206.73S371,461.46,257,461.46ZM257,78C159.55,78,80.27,157.28,80.27,254.73S159.55,431.46,257,431.46s176.73-79.28,176.73-176.73S354.45,78,257,78Z" />
                <path d="M342.92,358a15,15,0,0,1-10.61-4.39L160.47,181.76a15,15,0,1,1,21.21-21.21L353.53,332.4A15,15,0,0,1,342.92,358Z" />
                <path d="M171.07,358a15,15,0,0,1-10.6-25.6L332.31,160.55a15,15,0,0,1,21.22,21.21L181.68,353.61A15,15,0,0,1,171.07,358Z" />
              </g>
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          {/*left*/}
          <div className="flex ">
            <div className="flex flex-col divide-y border-r w-[160px]">
              <button
                onClick={() => setactive("skill")}
                className={`${
                  active === "skill"
                    ? "border-l-4 border-t-transparent border-red-400 bg-white"
                    : "bg-zinc-50"
                }  w-full py-3 text-sm text-left pl-4 text-zinc-800  font-semibold`}
              >
                Skill
              </button>
              {/* <button
                onClick={() => setactive("category")}
                className={`${
                  active === "category"
                    ? "border-l-4 border-t-transparent border-red-400 bg-white"
                    : "bg-zinc-50"
                }  w-full py-3 text-sm text-left pl-4 text-zinc-800  font-semibold`}
              >
                Category
              </button> */}
              <button
                onClick={() => setactive("language")}
                className={`${
                  active === "language"
                    ? "border-l-4 border-red-400 border-t-transparent bg-white"
                    : "bg-zinc-50"
                }  w-full py-3 text-sm text-left pl-4 text-zinc-800  font-semibold`}
              >
                Language
              </button>
              <button
                onClick={() => setactive("gender")}
                className={`${
                  active === "gender"
                    ? "border-l-4 border-red-400 border-t-transparent bg-white"
                    : "bg-zinc-50"
                }  w-full py-3 text-sm text-left pl-4 text-zinc-800  font-semibold`}
              >
                Gender
              </button>
            </div>

            {/*right*/}
            <div className="w-full py-3 px-5 flex flex-col">
              <div className="overflow-y-scroll flex flex-col h-[300px] pb-10">
                <button
                  onClick={() => {
                    setactiveskill(props.filter.skill);
                    setactivelanguage(props.filter.language);
                    setactivegender(props.filter.gender);
                  }}
                  className="text-sky-400 mb-2 mr-5 text-sm hover:text-sky-500 hover:underline self-end  max-w-max w-full"
                >
                  Clear
                </button>
                {active === "skill" && (
                  <div className="flex mt-2 flex-col gap-2 w-full px-5">
                    {props.filter.skill.map((item, i) => (
                      <SelectButton
                        state={activeskill}
                        active={activeskill.find(
                          (i) => i === item.toLowerCase()
                        )}
                        handle={setactiveskill}
                        key={i}
                        name={item}
                      />
                    ))}
                  </div>
                )}
                {/* {active === "category" && (
                  <div className="flex mt-2 flex-col gap-2 w-full px-5">
                    {category.map((item, i) => (
                      <SelectButton
                        state={activecategory}
                        active={activecategory.find((i) => i === item)}
                        handle={setactivecategory}
                        key={i}
                        name={item}
                      />
                    ))}
                  </div>
                )} */}
                {active === "language" && (
                  <div className="flex mt-2 flex-col gap-2 w-full px-5">
                    {props.filter.language.map((item, i) => (
                      <SelectButton
                        state={activelanguage}
                        active={activelanguage.find((i) => i === item)}
                        handle={setactivelanguage}
                        key={i}
                        name={item}
                      />
                    ))}
                  </div>
                )}
                {active === "gender" && (
                  <div className="flex mt-2 flex-col gap-2 w-full px-5">
                    {props.filter.gender.map((item, i) => (
                      <SelectButton
                        state={activegender}
                        active={activegender.find((i) => i === item)}
                        handle={setactivegender}
                        key={i}
                        name={item}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="border-t flex justify-end py-3 px-5 ">
            <button
              onClick={handleFilter}
              className="text-white font-bold text-base bg-sky-500 py-2 px-10 rounded-md hover:bg-sky-600 max-w-max w-full"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const SelectButton = (props) => {
  const handlechange = (e) => {
    if (props.state.find((i) => i === e.target.value)) {
      const arr = props.state.map((item) =>
        item === e.target.value ? "" : item
      );
      props.handle(arr);
    } else {
      props.handle((prev) => [...prev, e.target.value]);
    }
  };
  return (
    <div
      className={`${
        props.active === props.name.toLowerCase() ? "bg-red-50" : " bg-zinc-50"
      } flex justify-start py-2 px-2 rounded-md`}
    >
      <label
        className="flex capitalize cursor-pointer gap-2 w-full items-center flex-row"
        htmlFor={props.name}
      >
        <input
          type="checkbox"
          className="!accent-red-500 rounded w-3 h-3 appearance-none"
          id={props.name}
          value={props.name}
          checked={props.active === props.name.toLowerCase()}
          onChange={handlechange}
        />
        {props.name}
      </label>
    </div>
  );
};
