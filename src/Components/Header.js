import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { Supported_Language } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // console.log(user.photoURL);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log(showGptSearch)

  const handleGPTSearchView = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // console.log(uid);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }

      return () => unSubscribe();
    });
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-6 py-2 bg-gradient-to-b from-black w-screen flex justify-between z-10">
      <img
        className="w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
         {showGptSearch && <select
            className="p-2 mx-2 my-10 bg-black text-white"
            onChange={handleLanguageChange}
          >
            {Supported_Language.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>}
          <button
            className="bg-purple-600 rounded-md  px-2 my-8 mx-4 font-bold"
            onClick={handleGPTSearchView}
          >{showGptSearch?"HomePage":"SearchGPT" }
          </button>
          <span className="my-8 p-2 mx-2 font-bold text-white">
            {user.displayName}
          </span>
          <img
            className="w-10 h-10 my-8 rounded-2xl"
            src={user.photoURL}
            alt="my-pic"
          />
          <button
            className="mx-4 bg-red-600 h-10 my-8 rounded-2xl text-black p-2 font-bold "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
