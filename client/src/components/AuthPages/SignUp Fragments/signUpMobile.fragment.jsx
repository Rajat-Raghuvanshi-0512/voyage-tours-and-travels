import React from 'react'

function SignUpMobileFragment() {
  return (
    <>
        <div className="mt-8">
            <div className="mb-6">
            <label htmlFor="tel" className="text-lg">Mobile No</label> <br />
            <div className="flex gap-2">
                <div className="outline outline-vto-50 bg-white text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100">+91</div>
                <input type="tel" placeholder="eg: 99XXXX1024" className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100" title="enter your mobile number" required name="tel" />
            </div>
            </div>
            <div className="mb-8">
            <label htmlFor="password" className="text-lg">Password</label> <br />
            <input type="password" placeholder="Enter your Password" className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100" title="enter password" required name="password"/>
            </div>
            <button className="w-full text-white px-3 py-2 text-lg rounded-lg bg-vto-400 hover:bg-vto-500 focus:bg-vto-100 focus:text-vto-100" type="submit">Send OTP</button>
        </div>
    </>
  )
}

export default SignUpMobileFragment;