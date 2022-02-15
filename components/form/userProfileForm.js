import React, { useState } from "react";
import useCurrentAstrologer from "../context/profileContextvalue";
import Sample from "./asynctypehead";

export default function UserProfileForm(props) {
  const [typehead, settypehead] = useState(false);
  const [error, seterror] = useState(null);

  const { profile, storeCurrentAstrologer } = useCurrentAstrologer();


  let initialValue = {
    name: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    min: "",
    // time: "AM",
    country: "India",
    place: "",
    topic_of_concern: "",
    occupation: "",
    martial_status: "",
    gender: "",
    // tzone: "",
    // lat: "",
    // lon: "",
  };
  const [formValue, setformValue] = useState(initialValue);
  const [formError, setformError] = useState(initialValue);

  if (error) {
    setTimeout(() => seterror(null), 2000);
  }
  const submitingform = async (e) => {
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
      storeCurrentAstrologer(profile.astrologer, data.id);
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
    if (values.hour === "" || isNaN(values.hour) || values.hour === null) {
      error.hour = "*required";
    }
    if (!values.year) {
      error.year = "*required";
    }
    if (!values.month) {
      error.month = "*required";
    }
    if (!values.day) {
      error.day = "*required";
    }
    if (values.min === "" || isNaN(values.min) || values.min === null) {
      error.min = "*required";
    }
    if (!values.gender) {
      error.gender = "*required";
    }
    if (!values.martial_status) {
      error.martial_status = "*required";
    }
    if (!values.occupation) {
      error.occupation = "*required";
    }
    if (!values.topic_of_concern) {
      error.topic_of_concern = "*required";
    }
    if (!typehead && formValue.place === "") {
      error.place = "*required";
    }
    // if (!currentlocation && formValue.currentlocation === "") {
    //     error.currentlocation = "*required";
    // }
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

  const handle = (input) => {
    if (input) {
      setformValue((prev) => ({
        ...prev,
        place: input.place,
        country: input.country,
      }));
      settypehead(true);
    }
  };

  return (
    <>
      <form
        onSubmit={submitingform}
        className="max-w-xl  mx-auto bg-gray-50 shadow-lg  p-6 sm:p-10 rounded-md w-full flex  flex-col gap-8 md:gap-12 "
      >
        <div className="flex gap-5">
          <div className="w-full flex relative  flex-col pt-2 gap-4 ">
            <input
              type="text"
              value={formValue.name}
              placeholder="Enter Your Name* "
              onChange={handleInput}
              id="name"
              name="name"
              className={`w-full py-2 bg-transparent text-zinc-800  border-b-2 ${
                formError.name && formValue.name === ""
                  ? "border-red-500"
                  : "border-zinc-400"
              }  focus:border-green-500      `}
            />
          </div>
          <div className="w-full">
            <select
              name="gender"
              id="gender"
              value={formValue.gender}
              className={`text-zinc-800  py-3 border-b-2 w-full focus:border-green-500 focus:outline-none ${
                formError.gender && formValue.gender === ""
                  ? "border-red-500"
                  : "border-zinc-400"
              }`}
              onChange={handleInput}
            >
              <option value>Select Gender*</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="w-full flex   flex-col gap-4 ">
          {/*<label htmlFor="month" className="whitespace-nowrap text-lg">*/}
          {/*    {data.key.date}:*/}
          {/*</label>*/}
          <div className="grid grid-cols-4 gap-5 sm:items-center w-full ">
            <div className="w-full flex relative  flex-col pt-2 gap-4 ">
              <input
                type="number"
                value={formValue.day}
                placeholder="Day*"
                min={1}
                max={31}
                onChange={handleNumber}
                id="day"
                name="day"
                className={`w-full st bg-transparent py-2 text-zinc-800  border-b-2 ${
                  formError.day && formValue.day === ""
                    ? "border-red-500"
                    : "border-zinc-400"
                }  focus:border-green-500    `}
              />
            </div>
            <div className="flex col-span-2 items-center w-full gap-5">
              <select
                name="month"
                value={formValue.month}
                className={`text-zinc-800  py-3 border-b-2 w-full  focus:border-green-500 focus:outline-none ${
                  formError.month && formValue.month === ""
                    ? "border-red-500"
                    : "border-zinc-400"
                }`}
                onChange={handleNumber}
              >
                <option value>Month*</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="w-full flex relative  flex-col pt-2 gap-4 ">
              <input
                type="number"
                value={formValue.year}
                placeholder="Year* "
                min={1900}
                max={2050}
                onChange={handleNumber}
                id="year"
                name="year"
                className={`w-full  bg-transparent py-2 text-zinc-800  border-b-2 ${
                  formError.year && formValue.year === ""
                    ? "border-red-500"
                    : "border-zinc-400"
                }  focus:border-green-500    `}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex-col flex gap-5">
          <div className="flex w-full gap-5">
            <div className="w-full">
              <select
                name="hour"
                id="hour"
                value={formValue.hour}
                className={`text-zinc-800  py-3 border-b-2 w-full focus:border-green-500 focus:outline-none ${
                  formError.hour && formValue.hour === ""
                    ? "border-red-500"
                    : "border-zinc-400"
                }`}
                onChange={handleNumber}
              >
                <option value>Hour*</option>
                <option value="0">00 (12 midnight)</option>
                <option value="1">01 (am)</option>
                <option value="2">02 (am)</option>
                <option value="3">03 (am)</option>
                <option value="4">04 (am)</option>
                <option value="5">05 (am)</option>
                <option value="6">06 (am)</option>
                <option value="7">07 (am)</option>
                <option value="8">08 (am)</option>
                <option value="9">09 (am)</option>
                <option value="10">10 (am)</option>
                <option value="11">11 (am)</option>
                <option value="12">12 (noon)</option>
                <option value="13">13 (1 pm)</option>
                <option value="14">14 (2 pm)</option>
                <option value="15">15 (3 pm)</option>
                <option value="16">16 (4 pm)</option>
                <option value="17">17 (5 pm)</option>
                <option value="18">18 (6 pm)</option>
                <option value="19">19 (7 pm)</option>
                <option value="20">20 (8 pm)</option>
                <option value="21">21 (9 pm)</option>
                <option value="22">22 (10 pm)</option>
                <option value="23">23 (11 pm)</option>
              </select>
            </div>
            <div className="w-full">
              <select
                name="min"
                value={formValue.min}
                className={`text-zinc-800   py-3 border-b-2 w-full  focus:border-green-500 focus:outline-none ${
                  formError.min && formValue.min === ""
                    ? "border-red-500"
                    : "border-zinc-400"
                }`}
                onChange={handleNumber}
              >
                <option value>Minute*</option>
                <option value="0">00</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Sample passdata={handle} />
        </div>
        <div className="flex col-span-2 items-center w-full gap-5">
          <select
            name="martial_status"
            value={formValue.martial_status}
            className={`text-zinc-800  py-3 border-b-2 w-full  focus:border-green-500 focus:outline-none ${
              formError.martial_status && formValue.martial_status === ""
                ? "border-red-500"
                : "border-zinc-400"
            }`}
            onChange={handleInput}
          >
            <option value>Select Martial Status*</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="separated">Separated</option>
            <option value="windowed">Windowed</option>
          </select>
        </div>
        <div className="flex col-span-2 items-center w-full gap-5">
          <select
            name="occupation"
            value={formValue.occupation}
            className={`text-zinc-800  py-3 border-b-2 w-full  focus:border-green-500 focus:outline-none ${
              formError.occupation && formValue.occupation === ""
                ? "border-red-500"
                : "border-zinc-400"
            }`}
            onChange={handleInput}
          >
            <option value>Occupation*</option>
            <option value="private sector">Private Sector</option>
            <option value="govt sector">Govt Sector</option>
            <option value="bussiness/self employed">
              Bussiness/Self Employed
            </option>
            <option value="civil services">Civil Services</option>
            <option value="defence">Defence</option>
            <option value="not working">Not Working</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div className="flex col-span-2 items-center w-full gap-5">
          <select
            name="topic_of_concern"
            value={formValue.topic_of_concern}
            className={`text-zinc-800  py-3 border-b-2 w-full  focus:border-green-500 focus:outline-none ${
              formError.topic_of_concern && formValue.topic_of_concern === ""
                ? "border-red-500"
                : "border-zinc-400"
            }`}
            onChange={handleInput}
          >
            <option value>Topic of concern*</option>
            <option value="Carrer and Bussiness">Carrer and Bussiness</option>
            <option value="Marrige">Marrige</option>
            <option value="Love and Relationship">Love and Relationship</option>
            <option value="Wealth and Property">Wealth and Property</option>
            <option value="Education">Education</option>
            <option value="Legal Matters">Legal Matters</option>
            <option value="Child Name Counsultation">
              Child Name Counsultation
            </option>
            <option value="Bussiness Name Counsultation">
              Bussiness Name Counsultation
            </option>
            <option value="Gem Stone Counsultation">
              Gem Stone Counsultation
            </option>
            <option value="Commonly Treding Counsultation">
              Commonly Treding Counsultation
            </option>
            <option value="Match Making">Match Making</option>
            <option value="Birth Time Rectification">
              Birth Time Rectification
            </option>
            <option value="Name Correction Consulation">
              Name Correction Consulation
            </option>
            <option value="Travel Abroad Counslation">
              Travel Abroad Counslation
            </option>
            <option value="Remedy Counslation">Remedy Counslation</option>
            <option value="Health Counsultation">Health Counsultation</option>
          </select>
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
