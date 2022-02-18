import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { supabase } from "../supabase/supaclient";
const md5 = require("md5");

export default function AstrologerProfileForm(props) {
  const [error, seterror] = useState(null);

  let initialValue = {
    name: "",
    age: "",
    language: "",
    expert: "",
    experience: "",
    price: "",
    desc: "",
    gender: "male",
  };
  const [formValue, setformValue] = useState(initialValue);
  const [formError, setformError] = useState(initialValue);
  const router = useRouter();
  if (error) {
    setTimeout(() => seterror(null), 2000);
  }
  const submitingform = async (e) => {
    const session = JSON.parse(localStorage.getItem("astrologerSignup"));

    e.preventDefault();
    setformError(validay(formValue));
    if (Object.keys(validay(formValue)).length !== 0) {
      seterror("All detailed are must be filled");
      setformValue(formValue);
    } else if (Object.keys(validay(formValue)).length === 0) {
      let rea = Object.assign({}, formValue);
      const { data, error } = await supabase.from("astrologerProfile").insert([
        {
          ...rea,
          email: session.email,
          astrologerId: md5(session.email),
        },
      ]);
      router.push("/astrologer-admin");
      seterror(null);
    } else {
      setformError(validay(formValue));
      seterror("Please enter correct day");
    }
  };

  const validay = (values) => {
    let error = {};
    if (!values.name) {
      error.name = "*required";
    }
    if (!values.age) {
      error.age = "*required";
    }
    if (!values.price) {
      error.price = "*required";
    }
    if (!values.expert) {
      error.expert = "*required";
    }
    if (!values.experience) {
      error.experience = "*required";
    }

    if (!values.gender) {
      error.gender = "*required";
    }
    if (!values.language) {
      error.language = "*required";
    }
    if (!values.desc) {
      error.desc = "*required";
    }
    return error;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumber = (e) => {
    const { name, value } = e.target;
    setformValue((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <>
      <form
        onSubmit={submitingform}
        className="max-w-xl border border-green-200  mx-auto bg-white shadow-lg  p-6 sm:p-10 rounded-md w-full flex  flex-col gap-8 md:gap-12 "
      >
        <h2 className="text-center">Astrolger Detail Form</h2>
        <div className="w-full flex relative  flex-col pt-2 gap-3 ">
          <label htmlFor="name">Enter Your Full Name:</label>
          <input
            type="text"
            value={formValue.name}
            placeholder="E.g: kevin hires"
            onChange={handleInput}
            id="name"
            name="name"
            className={`w-full py-2 bg-transparent text-zinc-800  border-b-2 ${
              formError.name && formValue.name === ""
                ? "border-red-500"
                : "border-zinc-400"
            }  focus:border-green-500   caret-green-500   `}
          />
        </div>
        <div className="w-full flex  relative items-center flex-col-reverse sm:flex-row-reverse gap-3 ">
          <div className="w-full flex-col pt-2.5 gap-3 md:max-w-[170px]">
            <label htmlFor="gender">Select Gender:</label>
            <select
              name="gender"
              id="gender"
              value={formValue.gender}
              className={`text-zinc-800  py-3 border-b-2 w-full focus:border-green-500 caret-green-500 focus:outline-none ${
                formError.gender && formValue.gender === ""
                  ? "border-red-500"
                  : "border-zinc-400"
              }`}
              onChange={handleInput}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="w-full flex relative  flex-col pt-2 gap-3 ">
            <label htmlFor="price">Write Your Price Amount Per 5/min:</label>
            <input
              type="number"
              value={formValue.price}
              placeholder="E.g: ₹ 125"
              onChange={handleNumber}
              id="price"
              name="price"
              className={`w-full py-2 bg-transparent text-zinc-800  border-b-2 ${
                formError.price && formValue.price === ""
                  ? "border-red-500"
                  : "border-zinc-400"
              }  focus:border-green-500   caret-green-500   `}
            />
          </div>
        </div>

        <div className="w-full flex md:flex-row flex-col gap-4 ">
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="age" className="w-full">
              Enter Your Age:
            </label>
            <input
              type="number"
              placeholder="Age"
              name="age"
              id="age"
              onChange={handleNumber}
              className={`text-zinc-800  py-3 border-b-2 w-full caret-green-500 focus:border-green-500 focus:outline-none ${
                formError.age && formValue.age === ""
                  ? "border-red-500"
                  : "border-zinc-400"
              }`}
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="experience" className="w-full">
              Experience:
            </label>{" "}
            <input
              type="text"
              name="experience"
              id="experience"
              onChange={handleInput}
              placeholder="E.g: 3 years"
              className={`text-zinc-800  py-3 border-b-2 w-full caret-green-500 focus:border-green-500 focus:outline-none ${
                formError.experience && formValue.experience === ""
                  ? "border-red-500"
                  : "border-zinc-400"
              }`}
            />
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col gap-4 ">
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="language" className="w-full">
              Language:
            </label>{" "}
            <input
              type="text"
              name="language"
              id="language"
              multiple
              onChange={handleInput}
              placeholder="E.g: Hindi, English"
              className={`text-zinc-800  py-3 border-b-2 w-full caret-green-500 focus:border-green-500 focus:outline-none ${
                formError.language && formValue.language === ""
                  ? "border-red-500"
                  : "border-zinc-400"
              }`}
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="expert" className="w-full">
              Expertise:
            </label>{" "}
            <input
              type="text"
              multiple
              name="expert"
              id="expert"
              onChange={handleInput}
              placeholder="E.g: Tarot, Vedic"
              className={`text-zinc-800  py-3 border-b-2 w-full caret-green-500 focus:border-green-500 focus:outline-none ${
                formError.expert && formValue.expert === ""
                  ? "border-red-500"
                  : "border-zinc-400"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="desc">Write About Yourself:</label>
          <textarea
            name="desc"
            id="desc"
            onChange={handleInput}
            className={`text-zinc-800 rounded h-[130px] px-4 py-3 border-2 w-full caret-green-500 focus:border-green-500 focus:outline-none ${
              formError.desc && formValue.desc === ""
                ? "border-red-500"
                : "border-zinc-400"
            }`}
          ></textarea>
        </div>
        {error !== null ? (
          <span
            className={`border-l-4 border-red-500 py-2 text-red-700 bg-red-50  text-lg   w-full pl-3`}
          >
            {error}
          </span>
        ) : (
          ""
        )}
        <button
          type="submit"
          className="bg-green-500  font-bold hover:bg-green-400 text-white  text-lg p-3 rounded-md "
        >
          Submit Your detail
        </button>
      </form>
    </>
  );
}
