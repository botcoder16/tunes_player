import React from 'react'
import SongItem from '../components/SongItem';
import { useContext } from 'react';
import { GlobalContext } from '../context';

function Favorites() {
  const {favoritesList} = useContext(GlobalContext);
    return (
      <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
        {
          favoritesList && favoritesList.length >0 ? 
            favoritesList.map(item=> <SongItem item={item}/>)
          : <div>
            <p className='lg:text-4xl text-xl text-center text-black font-bold'>
              Nothing to show. Please add some songs
            </p>
            </div>
        }
      </div>
    )
  }

export default Favorites