import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";



const appstore= configureStore(

    {
        reducer:{
            user:UserReducer,
            movies:movieSlice,
            gpt:gptSlice,
            config:configSlice,
        },
    }
)

export default appstore