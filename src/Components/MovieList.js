import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies[0]?.poster_path);
  // console.log(title);

  return (
    <div className="px-6 ">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies &&
            movies.map((movie) => {
              return <MovieCard key={movie.id} path={movie?.poster_path} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
