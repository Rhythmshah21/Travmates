import React from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
// import 'firebase/firestore'
import { Link } from "react-router-dom";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import app, { UsersRef } from "../firebase/firebase";
import swal from "sweetalert";
import { addDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";



const Register = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    mobile: "",
    password: "",
    name:"",
  });
  const [Loading, setLoading] = useState(false);
  const [sentOtp, setsentOtp] = useState(false);
  const [Otp, setOtp] = useState("");

  const generateReCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      },
      auth
    );
  };

  const requestOtp = () => {
    setLoading(true);
    generateReCaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91${form.mobile}`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        swal({
          text: "OTP Sent",
          icon: "success",
          buttons: false,
          timer: 2000,
        });
        setsentOtp(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOtp = () => {
    try {
      setLoading(true);
      window.confirmationResult.confirm(Otp).then((result) => {
        uploadData();
        swal({
          text: "Sucessfully Registered",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        navigate("/login");
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadData = async () => {
    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(form.password, salt);

    await addDoc(UsersRef, {
      password: hash,
      mobile: form.mobile,
      name:form.name,
    });
  };

  return (
    <div className="w-[40%] mx-auto flex flex-col items-center my-32 py-32 rounded-3xl bg-dark">
      <h1 className="font-playfair text-mint font-extrabold text-4xl">Sign Up</h1>
      {sentOtp ? (
        <>
        
          <div class="p-2 w-full md:w-3/5">
            <div class="relative">
              <label class="text-xl font-medium text-primary ">Enter OTP</label>
              <input
                id=""
                value={Otp}
                onChange={(e) => setOtp(e.target.value)}
                class="mt-1 w-full bg-gray-300  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
              />
            </div>
          </div>
          <div class="p-2 w-1/3 my-2">
            <button
              onClick={verifyOtp}
              class="flex mx-auto text-black bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
            >
              {Loading ? <TailSpin height={25} color="white" /> : "Confirm"}
            </button>
          </div>
        </>
      ) : (
        <>
        <div class="p-2 w-full md:w-3/5">
            <div class="relative my-3 p-2">
              <label  class="text-xl font-medium text-primary ">
                Username
              </label>
              <input
                type={"text"}
                id=""
                name=""
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                class="w-full bg-gray-300  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
              />
            </div>
          </div>
          <div class="p-2 w-full md:w-3/5">
            <div class="relative my-3 p-2">
              <label  class="text-xl font-medium text-primary ">
                MobileNo
              </label>
              <input
                type={"number"}
                id=""
                name=""
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                class="w-full bg-gray-300  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
              />
            </div>
          </div>
          <div class="p-2 w-full md:w-3/5">
            <div class="relative">
              <label for="email" class="text-xl font-medium text-primary ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                class="w-full bg-gray-300  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
              />
            </div>
          </div>
          <div class="p-2 w-3/5 my-2">
            <button
              onClick={requestOtp}
              class="flex mx-auto text-secondary bg-mint border-0 py-2 px-8 focus:outline-none hover:bg-secondary/60 hover:text-mint font-medium rounded text-lg"
            >
              {Loading ? (
                <TailSpin height={25} color="white" />
              ) : (
                "Request OTP "
              )}
            </button>
          </div>
        </>
      )}
      <div>
        <p className="text-lg">
          Already have an account?!
          <Link to={"/login"}>
            <span className="text-primary ml-2 font-montserrat">Login </span>
          </Link>
        </p>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Register;
