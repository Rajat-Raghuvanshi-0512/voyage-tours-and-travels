import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SignInEmailFragments from "./SignIn Fragments/signInEmail.fragments";
import SignInMobileFragments from "./SignIn Fragments/signInMobile.fragments";

import login__img from "../../assets/Journey-cuate.svg";
import lock__logo from "../../assets/lock_logo.svg";
import google__logo from "../../assets/Google.svg";
import insta__logo from "../../assets/Instagram.svg";
import fb__logo from "../../assets/Facebook.svg";
import tick__icon from "../../assets/tickmark.svg";
import voyage__logo from "../../assets/Voyage_logo_vector.svg";

function SignInPageBody() {

  const Navigate = useNavigate();
  const [active, setActive] = useState("EmailFragment");

  return (
    <>

      <div className="text-2xl font-bold flex items-center gap-4 px-8 py-8">
        <img src={voyage__logo} alt="login__img" />
        VOYAGE
      </div>

      <div style={{backgroundColor: "#CFF5F5"}} className="w-3/4 rounded drop-shadow-lg mx-auto my-auto">
        <div className="my-6 rounded-lg">
          <div className="text-black my-2 flex justify-center items-center">
            <div className="w-full px-12 bg-gray-50 ">
              <form method="post">
                <div className="mb-12 mt-8">
                  <h1 className="text-3xl font-semibold">Sign In</h1>
                </div>

                <div className="flex text-center">
                  <div className="w-full border-b-2 py-2 cursor-pointer font-semibold text-gray-600 hover:text-black active:text-vto-400" onClick={() => setActive("EmailFragment")}>
                    EMAIL
                  </div>
                  <div className="w-full border-b-2 py-2 cursor-pointer font-semibold text-gray-600 hover:text-black focus:text-vto-400" onClick={() => setActive("MobileFragment")}>
                    MOBILE
                  </div>
                </div>

                {active === "EmailFragment" && <SignInEmailFragments />}
                {active === "MobileFragment" && <SignInMobileFragments />}

                <div className="my-2 flex justify-between">
                  <span><h3 className="text-vto-500 hover:text-vto-400 cursor-pointer" onClick={() => Navigate("/signup")}>Create Account</h3></span>
                  <span>
                    <h3 className="text-vto-500 hover:text-red-600 cursor-pointer flex items-center gap-2">
                      <img src={lock__logo} alt="login__img" />
                      Forgot Password?
                    </h3>
                  </span>
                </div>
              </form>

              <div className="my-8 flex items-center justify-between gap-2">
                <hr  className="w-1/3"/>
                <div>or Sign In with</div>
                <hr className="w-1/3"/>
              </div>

              <div className="mt-8 text-vto-400">
                <div className="cursor-pointer hover:bg-vto-50 w-full outline outline-1 outline-vto-100 px-3 py-2 rounded text-center flex items-center justify-center gap-4">
                  <img src={google__logo} alt="login__img" />
                  Google
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="cursor-pointer hover:bg-vto-50 w-full outline outline-1 outline-vto-100 px-3 py-2 rounded text-center flex items-center justify-center gap-3">
                    <div className="w-11 flex items-center">
                      <img src={insta__logo} alt="login__img w-full" />
                    </div>
                    Instagram
                  </div>
                  <div className="cursor-pointer hover:bg-vto-50 w-full outline outline-1 outline-vto-100 px-3 py-2 rounded text-center flex items-center justify-center items-center gap-3">
                    <div className="w-11 flex items-center">
                      <img src={fb__logo} alt="login__img w-full" />
                    </div>
                    Facebook
                  </div> 
                </div>
              </div>

              <div className="mb-8 text-xs text-center mt-2 text-gray-500">
                By signing in, I agree to Voyage's Terms of Use and Privacy Policy.
              </div>
            </div>

            
            <div  className="w-full h-full px-12">
              <div className=" w-full mt-16 flex items-center justify-center">
                <img src={login__img} alt="login__img" />
              </div>

              <div className="my-4 w-3/4 mx-auto">
                <span className="text-xl">Sign in to to unlock more benefits!</span>

                <div className="flex items-center gap-2 mt-4">
                  <img src={tick__icon} alt="login__img" className="w-3" />
                  <span>
                    Best Price Guarantee on bookings
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <img src={tick__icon} alt="login__img" className="w-3" />
                  <span>
                   Save money on every trip
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <img src={tick__icon} alt="login__img" className="w-3" />
                  <span>
                    Track your trip expenses
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <img src={tick__icon} alt="login__img" className="w-3" />
                  <span>
                    Get a chance to connect with travellers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SignInPageBody;