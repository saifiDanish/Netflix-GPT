import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSignIn,setIsSignIn] =useState(true);
  const toggleSignUp = ()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img"/>
      </div>
      <div>
        <form className="bg-black text-white absolute mx-auto left-0 right-0 w-3/12 my-36 p-12 bg-opacity-80 rounded-sm">
          <h1 className="font-bold text-3xl py-4">{isSignIn===true?"Sign In":"Sign Up"}</h1>
          {isSignIn===false && <input className="p-2 w-full my-2 bg-gray-600" type="text" placeholder="Full Name"/>}
          <input className="p-2 w-full my-2 bg-gray-600" type="text" placeholder="Email Address"/>
          <input className="p-2 w-full my-2 bg-gray-600" type="Password" placeholder="Password"/>
          <button className="p-3 w-full my-4 bg-red-800 rounded-sm">Sign In</button>
          <p className="my-4 cursor-pointer" onClick={toggleSignUp}>{isSignIn===true ?"New to Netflix? Sign Up Now":"Already Regintered ,Sign In Now..."}</p>
        </form>
      </div>
    </div>
  )
}

export default Login