import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context';
import { Link } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const { songDetailsData, setSongDetailsData, handleAddToFavorite, favoritesList } = useContext(GlobalContext);

  useEffect(() => {
    async function getSongDetails() {
      const response = await fetch(`https://v1.nocodeapi.com/hello12342/spotify/IUjabDuJRuyaZJCO/tracks?ids=${id}`);
      const data = await response.json();

      if (data?.tracks) {
        setSongDetailsData(data?.tracks[0]);
      }
    }
    getSongDetails();
  },[]);

  return (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className="row-start-2 lg:row-start-auto ">
        <div className='h-100 overflow-hidden rounded-xl group '>
          <img
            src={songDetailsData?.album?.images[0]?.url}
            className='w-full h-full object-cover block group-hover:scale-105 duration-300'
            alt='cover art'
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <h3 className='font-bold text-2xl truncate uppercase text-black'>{songDetailsData?.name}</h3>
        <span className='text-sm text-cyan-700 font-semibold'>Popularity {songDetailsData?.popularity}</span>
        <div>
          <button onClick={() => handleAddToFavorite(songDetailsData)} className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white'>
          {
            favoritesList && favoritesList.length >0 && favoritesList.findIndex(item=> item.id=== songDetailsData?.id) !== -1 ? 'Remove from favorites' : 'Add to favorites'
          }
          </button>
          <Link to={songDetailsData?.external_urls?.spotify} className='p-3 px-8 ml-4 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white'>Open in Spotify</Link>
        </div>
        <span className='mt-3'><strong>Id: </strong> {songDetailsData?.id}</span>
        <div className='mt-5'>
          <span className='text-2xl font-semibold text-black'>Preview:</span>
          <audio className='w-100 mt-2' src={songDetailsData?.preview_url} controls />
        </div>
        <div className='mt-5'>
          <span className='text-2xl font-semibold text-black'>Details:</span>
          <div className='mt-2'>
            <span className='text-xl font-semibold text-black'>Artists: </span>
            <ol className='flex flex-col gap-3'>
              {songDetailsData?.artists?.map((artist) => (
                <li>
                  <strong>Name:</strong><a href={artist?.external_urls?.spotify}> {artist.name}</a> <br />
                  <strong>Id:</strong> {artist.id} <br />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details