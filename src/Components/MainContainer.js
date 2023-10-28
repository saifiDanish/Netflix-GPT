import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = ()=>{

    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies)return null;
    // console.log(movies[0]);
    const mainMovie=movies[0];

    const {original_title,overview,id} =mainMovie;
    // console.log(id)
    return <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround movieId={id}/>
    </div>
}

export default MainContainer;
