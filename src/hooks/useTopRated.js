import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useTopRated = ()=>{
    const dispatch = useDispatch();
    const topRated = useSelector(store=>store.movies.topRated);


    const getTopRated = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
      const json = await data.json();
      console.log(json.results);
      dispatch(addTopRated(json.results));
    }
  
    useEffect(()=>{
       !topRated && getTopRated();
    },[]);
  
}

export default useTopRated;