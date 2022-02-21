import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/navbar/commonAstrologerPage";
import { supabase } from "../../components/supabase/supaclient";
import { astrologerDetail } from "../../components/utils/localuserdata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfileVeiw() {
  const [error, seterror] = useState(null);

  let initialValue = {
    name: "",
    age: "",
    language: "",
    expert: "",
    experience: "",
    desc: "",
    gender: "male",
    price: "",
  };
  const value = astrologerDetail();

  const [formValue, setformValue] = useState(
    value !== null ? value : initialValue
  );
  const [formError, setformError] = useState(
    value !== null ? value : initialValue
  );

  useEffect(() => {
    if (value !== null) {
      setformValue(value);
    }
  }, [value]);

  const router = useRouter();
  if (error) {
    setTimeout(() => seterror(null), 2000);
  }

  const submitingform = async (e) => {
    // const session = JSON.parse(localStorage.getItem("astrologerSignup"));

    e.preventDefault();
    setformError(validay(formValue));
    if (Object.keys(validay(formValue)).length !== 0) {
      seterror("All detailed are must be filled");
      setformValue(formValue);
    } else if (Object.keys(validay(formValue)).length === 0) {
      let rea = Object.assign({}, formValue);
      notify();
      const { data, error } = await supabase
        .from("astrologerProfile")
        .update({
          name: formValue.name,
          age: formValue.age,
          language: formValue.language,
          expert: formValue.expert,
          experience: formValue.experience,
          desc: formValue.desc,
          gender: formValue.gender,
          price: formValue.price,
        })
        .match({ astrologerId: formValue.astrologerId });
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
    if (!values.expert) {
      error.expert = "*required";
    }
    if (!values.experience) {
      error.experience = "*required";
    }

    if (!values.gender) {
      error.gender = "*required";
    }
    if (!values.price) {
      error.price = "*required";
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
  const notify = () =>
    toast.success(" Your data has been updated", { theme: "colored" });

  return (
    <>
      <ToastContainer />
      <Sidebar hide={true} active="profile">
        <div className="pt-24 md:pt-20 pb-32 overflow-y-scroll w-full bg-gray-50 h-screen ">
          <div className="w-full bg-white max-w-xl mx-auto py-10 rounded-md shadow-xl  flex-col gap-8 items-center   flex justify-center px-5 md:px-10">
            <div className="flex flex-col items-center  gap-6 font-bold text-2xl">
              <img src="/imgs/user.png" className="w-[80px] " alt="profile" />
              <span className="capitalize">{value?.name || "Test"} </span>
            </div>
            <form
              onSubmit={submitingform}
              className="max-w-xl  rounded w-full flex  flex-col gap-7 md:gap-9 "
            >
              <div className="w-full flex relative  flex-col pt-2 gap-3 ">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  value={formValue.name}
                  placeholder="E.g: kevin hires"
                  onChange={handleInput}
                  id="name"
                  name="name"
                  className={`w-full py-2 px-2 !bg-white  text-zinc-800  border  rounded ${
                    formError.name && formValue.name === ""
                      ? "border-red-500"
                      : "border-zinc-400"
                  }  focus:border-green-500 focus:ring-4 focus:ring-green-100  caret-green-500   `}
                />
              </div>

              <div className="flex gap-5 md:gap-10">
                <div className="w-full flex relative  flex-col pt-2 gap-3 ">
                  <label htmlFor="price">Calling Price Per Mins:</label>
                  <input
                    type="number"
                    value={formValue.price}
                    placeholder="E.g: ₹ 125"
                    onChange={handleInput}
                    id="price"
                    name="price"
                    className={`w-full py-2 px-2 !bg-white  text-zinc-800  border  rounded ${
                      formError.price && formValue.price === ""
                        ? "border-red-500"
                        : "border-zinc-400"
                    }  focus:border-green-500 focus:ring-4 focus:ring-green-100  caret-green-500   `}
                  />
                </div>
                <div className="w-full flex flex-col pt-2 gap-3">
                  <label htmlFor="gender"> Gender:</label>
                  <select
                    name="gender"
                    id="gender"
                    value={formValue.gender}
                    className={`text-zinc-800 !bg-white py-2 px-2 border rounded w-full focus:border-green-500 caret-green-500 focus:outline-none ${
                      formError.gender && formValue.gender === ""
                        ? "border-red-500"
                        : "border-zinc-400"
                    } focus:ring-4 focus:ring-green-100`}
                    onChange={handleInput}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex  md:gap-10 gap-5 ">
                <div className="flex flex-col  gap-3 w-full">
                  <label htmlFor="age" className="w-full">
                    Age:
                  </label>
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    id="age"
                    value={formValue.age}
                    onChange={handleNumber}
                    className={`text-zinc-800 px-2 !bg-white border rounded py-2  w-full caret-green-500 focus:border-green-500 focus:outline-none ${
                      formError.age && formValue.age === ""
                        ? "border-red-500"
                        : "border-zinc-400"
                    } focus:ring-4 focus:ring-green-100`}
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
                    value={formValue.experience}
                    onChange={handleInput}
                    placeholder="E.g: 3 years"
                    className={`text-zinc-800  py-2 px-2 border !bg-white rounded w-full caret-green-500 focus:border-green-500 focus:outline-none ${
                      formError.experience && formValue.experience === ""
                        ? "border-red-500"
                        : "border-zinc-400"
                    } focus:ring-4 focus:ring-green-100`}
                  />
                </div>
              </div>
              <div className="w-full flex sm:flex-row flex-col md:gap-10 gap-7 ">
                <div className="flex flex-col gap-3 w-full">
                  <label htmlFor="language" className="w-full">
                    Language:
                  </label>{" "}
                  <input
                    type="text"
                    name="language"
                    id="language"
                    multiple
                    value={formValue.language}
                    onChange={handleInput}
                    placeholder="E.g: Hindi, English"
                    className={`text-zinc-800  py-2 px-2 !bg-white  border rounded w-full caret-green-500 focus:border-green-500 focus:outline-none ${
                      formError.language && formValue.language === ""
                        ? "border-red-500"
                        : "border-zinc-400"
                    } focus:ring-4 focus:ring-green-100`}
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
                    value={formValue.expert}
                    onChange={handleInput}
                    placeholder="E.g: Tarot, Vedic"
                    className={`text-zinc-800  py-2 px-2 border !bg-white  rounded w-full caret-green-500 focus:border-green-500 focus:outline-none ${
                      formError.expert && formValue.expert === ""
                        ? "border-red-500"
                        : "border-zinc-400"
                    } focus:ring-4 focus:ring-green-100`}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="desc">Write About Yourself:</label>
                <textarea
                  name="desc"
                  id="desc"
                  value={formValue.desc}
                  onChange={handleInput}
                  className={`text-zinc-800 md:text-base text-xs rounded h-[130px] px-2 py-3 border !bg-white  w-full caret-green-500 focus:border-green-500 focus:outline-none ${
                    formError.desc && formValue.desc === ""
                      ? "border-red-500"
                      : "border-zinc-400"
                  } focus:ring-4  focus:ring-green-100`}
                ></textarea>
              </div>
              {error !== null ? (
                <span
                  className={`border-l-4 border-red-500 py-2 px-2 text-red-700 bg-red-50  text-lg   w-full pl-3`}
                >
                  {error}
                </span>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="bg-green-500 shadow-lg hover:shadow-xl shadow-green-400/20 font-bold hover:bg-green-400 text-white  text-lg p-2.5 rounded "
              >
                Submit Your detail
              </button>
            </form>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
