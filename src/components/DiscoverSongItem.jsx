import React from 'react'
import { Link } from 'react-router-dom'

function DiscoverSongItem({ item }) {
  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white'>
      <div className="h-80 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.images[2]?.url} alt="song item" className='block w-full' />
      </div>
      <div>
        <Link to={item?.artists[0]?.external_urls?.spotify} className='text-sm text-cyan-700 font-medium'>{item?.artists[0]?.name}</Link>
        <Link to={item?.external_urls}><h3 className='font-bold text-2xl truncate uppercase text-black'>{item?.name}</h3></Link>
        <ul>
          <li className='text-sm text-cyan-800 font-medium my-1'>{item?.album_type}</li>
          <li className='text-sm text-cyan-800 font-medium'>{item?.release_date}</li>
        </ul>
      </div>
    </div>
  )
}

export default DiscoverSongItem