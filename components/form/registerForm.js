import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { setDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";

import { db } from "../firebase/firebaseinitialization";
import useUserData from "../context/logincontextvalue";
=======
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
>>>>>>> d608bdd0a7c4385223eec99dd76a389ed3a3c939
import { supabase } from "../supabase/supaclient";

export default function RegisterForm(props) {
  const initialValue = {
    email: "",
    password: "",
    name: "",
  };
<<<<<<< HEAD
  const [inputvalue, setvalue] = useState(initialValue);
  const [error, seterror] = useState("");

  const { storeuserdata } = useUserData();
=======

  const [inputvalue, setvalue] = useState(initialValue);
  const [mobileno, setmobileno] = useState();
  const [error, seterror] = useState("");
  const [validatedata, servalidate] = useState();
>>>>>>> d608bdd0a7c4385223eec99dd76a389ed3a3c939

  if (error) {
    setTimeout(() => seterror(""), 2000);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalue({ ...inputvalue, [name]: value });
  };

<<<<<<< HEAD
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
=======
  useEffect(() => {
    if (validatedata === null) {
      props.passactive(true);
    }
  }, [validatedata]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputvalue.password.length < 6) {
      seterror("password must be 6 character");
    } else if (
      inputvalue.email !== "" &&
      inputvalue.password !== "" &&
      inputvalue.password.length >= 6 &&
      isValidPhoneNumber(mobileno)
    ) {
      validate();
>>>>>>> d608bdd0a7c4385223eec99dd76a389ed3a3c939
    } else {
      seterror("All details must be filled");
    }
  };

<<<<<<< HEAD
=======
  const validate = async () => {
    const { data, error } = await supabase.auth.signUp(
      {
        email: inputvalue.email,
        password: inputvalue.password,
      },
      {
        data: {
          name: inputvalue.name,
          mobilenumber: mobileno,
        },
      }
    );
    servalidate(error);
    error !== null ? seterror("Email is already register") : storedetail();
  };

  const storedetail = async () => {
    const { data, error } = await supabase.from("userDetail").insert([
      {
        name: inputvalue.name,
        email: inputvalue.email,
        totalamount: 0,
        mobilenumber: mobileno,
      },
    ]);
    props.passactive(true);
  };

>>>>>>> d608bdd0a7c4385223eec99dd76a389ed3a3c939
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
<<<<<<< HEAD
              className="outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300  w-full border-2 rounded-md  px-4  p-2.5"
=======
              className="outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300  w-full border-2 rounded-md  px-4  py-2.5"
>>>>>>> d608bdd0a7c4385223eec99dd76a389ed3a3c939
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="  text-zinc-500  ">
<<<<<<< HEAD
=======
              Mobile Number
            </label>

            <PhoneInput
              defaultCountry="IN"
              placeholder="Enter phone number"
              value={mobileno}
              onChange={setmobileno}
              className="border-2 py-2.5 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 rounded-md  px-3 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="  text-zinc-500  ">
>>>>>>> d608bdd0a7c4385223eec99dd76a389ed3a3c939
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
<<<<<<< HEAD
            <span className="bg-red-50 py-2 px-4 font-semibold text-red-500 border-l-2 border-red-500">
=======
            <span className="bg-red-50 py-2 px-4 font-semibold text-red-500 border-l-4 border-red-500">
>>>>>>> d608bdd0a7c4385223eec99dd76a389ed3a3c939
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
