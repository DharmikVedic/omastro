import React, { useState } from "react";
import useUserData from "../context/logincontextvalue";

export default function LoginForm(props) {
  const initialValue = {
    email1: "",
    password1: "",
  };
  const [inputvalue, setvalue] = useState(initialValue);
  const [error, seterror] = useState("");
  const { signIn } = useUserData();

  if (error) {
    setTimeout(() => seterror(""), 2000);
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalue({ ...inputvalue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputvalue.email1 !== "" && inputvalue.password1 !== "") {
      const { error } = await signIn({
        email: inputvalue.email1,
        password: inputvalue.password1,
      });
      if (error) {
        seterror("Invalid login credential");
      } else {
        props.passactive(true);
      }
    } else {
      seterror("All details must be filled");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl max-w-md p-6 sm:p-10 w-full flex flex-col gap-8"
      >
        <div>
          <h2 className="mb-4 text-zinc-700 font-semibold">Sign in</h2>
          <p className="text-lg text-zinc-400">
            Consult India's Best Astrologers Online With Homeastro
          </p>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className=" text-zinc-500">
              Email Address
            </label>

            <input
              id="email1"
              type="email1"
              onChange={handleInput}
              value={inputvalue.email1}
              name="email"
              placeholder="name@address.com"
              className="outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300  w-full border-2 rounded-md  px-4  p-2.5"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password1" className="  text-zinc-500">
              Password
            </label>

            <input
              id="password1"
              type="password1"
              onChange={handleInput}
              value={inputvalue.password1}
              name="password1"
              placeholder="Enter your password"
              className="outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300  w-full border-2 rounded-md  px-4  p-2.5"
              required
            />
          </div>
          {error !== "" && (
            <span className="bg-red-50 py-2 px-4 font-semibold text-red-500 border-l-2 border-red-500">
              {error}
            </span>
          )}
          <button
            type="submit"
            className="mt-5 text-lg font-bold hover:bg-blue-600 bg-blue-500 py-3 px-6 rounded text-white"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}
