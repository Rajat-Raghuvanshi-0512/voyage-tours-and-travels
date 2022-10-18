import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//images
import login__img from "../../assets/forgotpasspic.svg";
import voyage__logo from "../../assets/airplane.png";

function ResetPassPageBody() {

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
            <div className="w-full py-12 px-12 bg-gray-50 h-full">

              <div className="my-4">
                <span className="cursor-pointer hover:text-vto-500 text-vto-400 text-sm font-semibold" onClick={() => Navigate("/signin")}>
                    &lt; Back to login
                </span>
              </div>

              <div className="mb-1 mt-2">
                <h1 className="text-2xl font-semibold">Reset Password</h1>
              </div>

              <div className='text-sm text-gray-500'>
                Please create a new strong password for your account
              </div>

              <form method="post">
                <div className="mt-6">
                    <div className="mb-4">
                    <label htmlFor="password" className="text-md">New Password</label> <br />
                    <input type="password" placeholder="Enter your Password" className="outline outline-vto-50 w-full text-black text-md mt-2 py-2 px-3 rounded focus:outline-vto-100" title="enter password" required name="password"/>
                    </div>
                    <div className="mb-6">
                    <label htmlFor="confirmpassword" className="text-md">Confirm Password</label> <br />
                    <input type="password" placeholder="Confirm your Password" className="outline outline-vto-50 w-full text-black text-md mt-2 py-2 px-3 rounded focus:outline-vto-100" title="re-enter password" required name="confirmpassword"/>
                    </div>
                    <button className="w-full text-white px-3 py-2 text-md rounded-lg bg-vto-400 hover:bg-vto-500 focus:bg-vto-100 focus:text-vto-100" type="submit">Save Password</button>
                </div>

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

export default ResetPassPageBody;