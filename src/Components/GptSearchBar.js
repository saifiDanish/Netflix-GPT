import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  // console.log(langKey);
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "+&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();

    return json.results;
  };

  const gpt_Query =
    "Act as a movie recommendation system and suggest some movies for the query : " +
    searchText?.current?.value +
    "only give me name of only five movies comma seperated like the example given ahead.Example result:  dhol,hera pehri,Sholay,don,golmaal,koi mil gya";

  const handleGPTSearchClick = async () => {
    // console.log(searchText.current.value);
    const data = await openai.chat.completions.create({
      messages: [{ role: "user", content: gpt_Query }],
      model: "gpt-3.5-turbo",
    });
    // console.log(data.choices?.[0]?.message?.content);
    // const json = await data.json();
    // console.log(json);

    const gptMovies = data.choices?.[0]?.message?.content.split(",");
    // if(gptMovies[0]==="Promise")return Loader;

    const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie));

    // console.log(promiseArray);
    const tmdbMovie = await Promise.all(promiseArray);
    dispatch(addGPTMovieResult({movieName:gptMovies,movieResult:tmdbMovie}));

    // console.log(tmdbMovie);
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="bg-black grid grid-cols-12 w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-4 col-span-8 "
          placeholder={lang[langKey].gptSearchPlaceholder}
          type="text"
        />
        <button
          className="bg-red-700 col-span-4 px-6 py-2 m-4 rounded-2xl"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
