import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieName:null,
        movieResult:null,
    },

    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGPTMovieResult:(state,action)=>{
            // state.gptMovies=action.payload;
            const {movieName,movieResult}=action.payload;
            state.movieName=movieName;
            state.movieResult=movieResult;

        }
    }
})


export const {toggleGptSearchView,addGPTMovieResult} = gptSlice.actions;

export default gptSlice.reducer;