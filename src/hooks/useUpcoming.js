import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useUpcoming = ()=>{
    const dispatch = useDispatch();
    const upcoming = useSelector(store=>store.movies.upcoming);
    const getUpComing = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
      const json = await data.json();
      console.log(json.results);
      dispatch(addUpcoming(json.results));
    }
  
    useEffect(()=>{
      !upcoming && getUpComing();
    },[]);
  
}

export default useUpcoming;