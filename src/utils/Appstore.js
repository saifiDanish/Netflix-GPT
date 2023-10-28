import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import movieSlice from "./movieSlice";



const appstore= configureStore(

    {
        reducer:{
            user:UserReducer,
            movies:movieSlice,
        },
    }
)

export default appstore