import React from 'react'

const VideoTitle = ({title,overview}) => {
  // console.log(title)
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-4xl py-6'>{title}</h1>
      <p className='w-1/4 text-lg'>{overview}</p>
      <div className='mt-6'>
        <button className='hover:bg-opacity-80 py-4 px-10 rounded-lg font-bold text-black bg-white'>▶️ Play</button>
        <button className='mx-2 bg-gray-500 py-4 px-10 rounded-lg font-bold text-white bg-opacity-60'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle