import { useRef, useState } from "react";
import Header from "./Header";
import Validate from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
const Login = () => {
  const dispatch=useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    const message = Validate(email.current.value, password.current.value);
    console.log(message);
    setErrMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // const auth = getAuth();
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://media.licdn.com/dms/image/D4D35AQEiduhQFX6l2A/profile-framedphoto-shrink_400_400/0/1669286315199?e=1698087600&v=beta&t=wcaQUR0ERRBuyjVUMvn9NInwidiwdumyt76KIkKCir8",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // console.log(uid);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          setErrMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          setErrMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black text-white absolute mx-auto left-0 right-0 w-3/12 my-36 p-12 bg-opacity-80 rounded-sm"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignIn === true ? "Sign In" : "Sign Up"}
          </h1>
          {isSignIn === false && (
            <input
              ref={name}
              className="p-2 w-full my-2 bg-gray-600"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="p-2 w-full my-2 bg-gray-600"
            type="text"
            placeholder="Email Address"
          />
          <input
            ref={password}
            className="p-2 w-full my-2 bg-gray-600"
            type="Password"
            placeholder="Password"
          />
          <p className="text-red-600 py-2 text-lg mt-1">{errMessage}</p>
          <button
            className="p-3 w-full my-4 bg-red-800 rounded-sm"
            onClick={handleButtonClick}
          >
            Sign In
          </button>
          <p className="my-4 cursor-pointer" onClick={toggleSignUp}>
            {isSignIn === true
              ? "New to Netflix? Sign Up Now"
              : "Already Regintered ,Sign In Now..."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
