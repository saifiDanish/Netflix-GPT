import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { options } from '../utils/constants';

const useMovieTrailer = (movieId) => {

    const dispatch =useDispatch();
    const trailerVideo = useSelector(store=>store.movies.trailerVideo);
    const getMoviesVideo = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
      const json = await data.json();
      // console.log(json);
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
  
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
      // console.log(trailer);
    };
    useEffect(() => {
      !trailerVideo && getMoviesVideo();
    },[]);
}

export default useMovieTrailer