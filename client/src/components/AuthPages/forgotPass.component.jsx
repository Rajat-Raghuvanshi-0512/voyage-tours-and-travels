import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//fragments
import ForgotPassEmailFragments from "./ForgotPass Fragments/forgotPassEmail.fragment";
import ForgotPassMobileFragments from "./ForgotPass Fragments/forgotPassMobile.fragment";

//images
import login__img from "../../assets/forgotpasspic.svg";
import voyage__logo from "../../assets/airplane.png";

function ForgotPassPageBody() {

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
            <div className="w-full p-12 bg-gray-50 h-full">

              <div className="my-4">
                <span className="cursor-pointer hover:text-vto-500 text-vto-400 text-sm font-semibold" onClick={() => Navigate("/signin")}>
                    &lt; Back to login
                </span>
              </div>

              <form method="post">

                <div className="flex text-center">
                  <div className="w-full border-b-2 py-2 cursor-pointer font-semibold text-gray-600 hover:text-black active:text-vto-400" onClick={() => setActive("EmailFragment")}>
                    EMAIL
                  </div>
                  <div className="w-full border-b-2 py-2 cursor-pointer font-semibold text-gray-600 hover:text-black focus:text-vto-400" onClick={() => setActive("MobileFragment")}>
                    MOBILE
                  </div>
                </div>

                <div className="mb-2 mt-8">
                  <h1 className="text-2xl font-semibold">Forgot Password?</h1>
                </div>


                {active === "EmailFragment" && <ForgotPassEmailFragments />}
                {active === "MobileFragment" && <ForgotPassMobileFragments />}

              </form>

              <div className="mb-8 text-xs text-center mt-2 text-gray-500">
                By continuing, you agree to Voyage's Terms of Use and Privacy Policy.
              </div>
            </div>

            
            <div  className="w-full h-full px-12">
              <div className=" w-full mt-16 flex items-center justify-center">
                <img src={login__img} alt="login__img" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ForgotPassPageBody;