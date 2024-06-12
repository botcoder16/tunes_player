import React from 'react'
import { Link } from 'react-router-dom'

function DiscoverSongItem({ item }) {
  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 bg-black shadow-xl gap-5 border-2 rounded-2xl border-whiteshadow border rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out '>
    
      <div className="h-80 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.images[2]?.url} alt="song item" className='block w-full' />
      </div>
      <div>
        <Link to={item?.artists[0]?.external_urls?.spotify} className='text-sm text-cyan-400 font-large'>{item?.artists[0]?.name}</Link>
        <Link to={item?.external_urls}><h3 className='font-bold text-2xl truncate uppercase text-white'>{item?.name}</h3></Link>
        <ul>
          <li className='text-sm text-cyan-200 font-medium my-1 capitalize'>{item?.album_type}</li>
        </ul>
      </div>
    </div>
  )
}

export default DiscoverSongItem