import React, { useEffect, useState } from "react";
import { setDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";

import { db } from "../firebase/firebaseinitialization";
import useUserData from "../context/logincontextvalue";
import { supabase } from "../supabase/supaclient";

export default function RegisterForm(props) {
  const initialValue = {
    email: "",
    password: "",
    name: "",
  };
  const [inputvalue, setvalue] = useState(initialValue);
  const [error, seterror] = useState("");

  const { storeuserdata } = useUserData();

  if (error) {
    setTimeout(() => seterror(""), 2000);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalue({ ...inputvalue, [name]: value });
  };

  //   console.log(querySnapshot);
  //   useEffect(async () => {
  //     const q = query(
  //       collection(db, "usersignup"),
  //       where("email", "==", "kevin@gmail.com")
  //     );
  //     const querySnapshot = await getDoc(
  //       doc(db, "usersignup", "kevin@gmail.com")
  //     );
  //     // querySnapshot.forEach((doc) => {
  //     //   // doc.data() is never undefined for query doc snapshots
  //     //   console.log(doc.id, " => ", doc.data());
  //     // });
  //     console.log(querySnapshot.exists());
  //   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputvalue.email !== "" && inputvalue.password !== "") {
      // const querySnapshot = await getDoc(
      //   doc(db, "usersignup", inputvalue.email)
      // );
      // // console.log(querySnapshot.exists());
      // if (querySnapshot.exists()) {
      //   alert("exits");
      //   seterror("Email is already register try to login");
      // } else {
        props.passactive(true);
        const { user, session, error } = await supabase.auth.signUp(
          {
            email: inputvalue.email,
            password: inputvalue.password,
          },
          {
            data: {
              name: inputvalue.name,
            },
          }
        );

        console.log(user, session, error);
        storeuserdata({ email: inputvalue.email, name: inputvalue.name });
        // setDoc(doc(db, "usersignup", inputvalue.email), {
        //   timestamp: serverTimestamp(),
        //   ...inputvalue,
        // });
      // }
    } else {
      seterror("All details must be filled");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white  shadow-xl max-w-md p-6 sm:p-10 w-full flex flex-col gap-8"
      >
        <div>
          <h2 className="mb-4 text-zinc-700 font-semibold">Sign up</h2>
          <p className=" text-zinc-400">
            Consult India's Best Astrologers Online With Homeastro
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className=" text-zinc-500 ">
              Enter Your Full Name
            </label>
            <input
              id="name"
              type="name"
              onChange={handleInput}
              value={inputvalue.name}
              name="name"
              placeholder="Enter Your Name"
              className="outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300  w-full border-2 rounded-md  px-4  p-2.5"
              required
            />
          </div>

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
            <label htmlFor="password" className="  text-zinc-500  ">
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
    </div>
  );
}
