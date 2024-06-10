import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import SongItem from '../../components/SongItem';

function Home() {
const {songList,loading} = useContext(GlobalContext);

if(loading) return <div>Loading... Please wait!</div>

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        songList && songList.length >0 ? 
          songList.map(item=> <SongItem item={item}/>)
        : <div>
          <p className='lg:text-4xl text-xl text-center text-black font-bold'>
            Nothing to show. Please search something else
          </p>
          </div>
      }
    </div>
  )
}

export default Home