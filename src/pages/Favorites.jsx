import React, { useContext } from 'react';
import SongItem from '../components/SongItem';
import { GlobalContext } from '../context';
import './Favorites.css'; 

function Favorites() {
  const { favoritesList } = useContext(GlobalContext);
  return (
    <div className='favorites-container py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {favoritesList && favoritesList.length > 0 ? 
        favoritesList?.map(item => <SongItem key={item.id} item={item} />) : 
        <div>
          <p className='lg:text-4xl text-xl text-center text-white font-bold'>
            Nothing to show. Please add some songs.
          </p>
        </div>
      }
    </div>
  );
}

export default Favorites;
