import React from 'react'

function SignUpEmailFragment() {
  return (
    <>
        <div className="mt-8">
            <div className="mb-6">
            <label htmlFor="f_name" className="text-lg">First Name</label> <br />
            <input type="text" placeholder="eg: Mark" className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100" title="enter first name" required name="f_name" />
            </div>  
            <div className="mb-6">
            <label htmlFor="l_name" className="text-lg">Last Name</label> <br />
            <input type="text" placeholder="eg: Linn" className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100" title="enter last name" required name="l_name" />
            </div>  
            <div className="mb-6">
            <label htmlFor="email" className="text-lg">Email</label> <br />
            <input type="email" placeholder="eg: MarkLin@xyz.com" className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100" title="enter your email" required name="email" />
            </div>
            <div className="mb-8">
            <label htmlFor="password" className="text-lg">Password</label> <br />
            <input type="password" placeholder="Enter your Password" className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100" title="enter password" required name="password"/>
            </div>
            <div className="mb-8">
            <label htmlFor="confirmpassword" className="text-lg">Confirm Password</label> <br />
            <input type="password" placeholder="Confirm your Password" className="outline outline-vto-50 w-full text-black text-lg mt-2 py-2 px-3 rounded focus:outline-vto-100" title="re-enter password" required name="confirmpassword"/>
            </div>
            <button className="w-full text-white px-3 py-2 text-lg rounded-lg bg-vto-400 hover:bg-vto-500 focus:bg-vto-100 focus:text-vto-100" type="submit">Sign Up</button>
        </div>
    </>
  )
}

export default SignUpEmailFragment;