import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSuggestionPage = () => {
  const gpt = useSelector(store=>store.gpt);
  
  const {movieName,movieResult} = gpt;

  if(!movieName)return null;
  return (
    <div className='bg-black m-4 opacity-85 '>
      {movieName.map((movieName,idx)=><MovieList title={movieName} movies={movieResult[idx]}/>)}
    </div>
  )
}

export default GptSuggestionPage