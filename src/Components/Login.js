import Header from "./Header"

const Login = () => {
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img"/>
      </div>
      <div>
        <form className="bg-black text-white absolute mx-auto left-0 right-0 w-3/12 my-36 p-12 bg-opacity-80 rounded-sm">
          <h1 className="font-bold text-3xl py-4">Sign In</h1>
          <input className="p-2 w-full my-2 bg-gray-500" type="text" placeholder="Email Address"/>
          <input className="p-2 w-full my-2 bg-gray-500" type="Password" placeholder="Password"/>
          <button className="p-3 w-full my-4 bg-red-800 rounded-sm">Sign In</button>
          <p className="my-4">New to Netflix? Sign Up Now</p>
        </form>
      </div>
    </div>
  )
}

export default Login