import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useUserData from "../context/logincontextvalue";
import { db } from "../firebase/firebaseinitialization";

export default function AstrologerLogin(props) {
  const initialValue = {
    email: "",
    password: "",
  };
  const [inputvalue, setvalue] = useState(initialValue);
  const [error, seterror] = useState("");
  const { storeastrologerdata } = useUserData();
  if (error) {
    setTimeout(() => seterror(""), 2000);
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalue({ ...inputvalue, [name]: value });
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputvalue.email !== "" && inputvalue.password !== "") {
      const q1 = query(
        collection(db, "astrologerSignup"),
        where("email", "==", inputvalue.email),
        where("password", "==", inputvalue.password)
      );
      if ((await getDocs(q1)).size > 0) {
        alert("login successfull");
        router.push("/astrologer-admin");
        const q = (await getDocs(q1)).docs.forEach((r) => {
          storeastrologerdata({ email: r.data().email, name: r.data().name });
        });
      } else {
        seterror("please write correct password or email");
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
          <h2 className="mb-4 text-zinc-700 font-semibold">
            Astrologer Sign in
          </h2>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className=" text-zinc-500">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              onChange={handleInput}
              value={inputvalue.email}
              name="email"
              placeholder="name@address.com"
              className="outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300  w-full border-2 rounded-md  px-4  p-2.5"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="  text-zinc-500">
              Password
            </label>

            <input
              id="password"
              type="password"
              onChange={handleInput}
              value={inputvalue.password}
              name="password"
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
