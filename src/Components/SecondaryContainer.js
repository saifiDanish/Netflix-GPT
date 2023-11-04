import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{

    const movies = useSelector((store)=>store.movies)
    console.log(movies); 
    return <div className="bg-black ">
        <div className="-mt-44 relative z-20 pl-16">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies?.popularMovies} />
            <MovieList title={"Top Rated"} movies={movies?.topRated} />
            <MovieList title={"Upcoming Movies"} movies={movies?.upcoming} />
        </div>
    </div>
}

export default SecondaryContainer;