import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  // console.log(user.photoURL);
  const handleSignOut=()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="absolute px-6 py-2 bg-gradient-to-b from-black w-screen flex justify-between">
      <img className="w-56" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
     {user && <div className="flex p-2">
        <span className="my-8 p-2 mx-2 font-bold ">{user.displayName}</span>
        <img className="w-10 h-10 my-8 rounded-2xl" src={user.photoURL} alt="my-photo"/>
        <button className="mx-4 bg-red-600 h-10 my-8 rounded-2xl text-black p-2 font-bold " onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  )
}
export default Header