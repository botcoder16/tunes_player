import React from 'react'
import { Link } from 'react-router-dom'

function SongItem({item}) {
  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 bg-black shadow-xl gap-5 border-2 rounded-2xl border-whiteshadow border-rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out'>
      <div className="h-80 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.album?.images[0]?.url} alt="song item" className='block w-full rounded-lg'/>
      </div>
      <div>
        <span className='text-sm text-cyan-300 font-medium'>{item?.artists[0]?.name}</span>
        <h3 className='font-bold text-2xl truncate uppercase text-white'>{item?.name}</h3>
        <Link to={`/song-item/${item?.id}`} className='text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-white/80 text-black'>Song Details</Link>
      </div>
    </div>
  )
}

export default SongItem