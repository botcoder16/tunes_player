import React, { useContext } from 'react'
import DiscoverSongItem from '../components/DiscoverSongItem';
import { GlobalContext } from '../context';

function Discover() {
  const { discoverSongs, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading... Please wait!</div>
  return (
    <>
      <h2 className='font-extrbold mt-5 text-4xl text- truncate uppercase text-black'>New Releases !</h2>
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        discoverSongs && discoverSongs.length >0 ? 
        discoverSongs?.map(item=> <DiscoverSongItem item={item}/>)
        :  
        <div>
            <p>
                Something went wrong... Redirect to Home
            </p>
        </div>
        }
    </div>
      </>
  )
}

export default Discover