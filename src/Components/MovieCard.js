import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({path}) => {
    // console.log(path);
    if(!path)return null;
  return (
    <div className='w-32 mr-2 pr-2'>
        <img src={IMG_CDN_URL+path} alt='poster'/>
    </div>
  )
}

export default MovieCard