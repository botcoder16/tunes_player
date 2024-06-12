import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context';
import './Navbar.css'; 

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className='flex justify-between items-center py-6 container mx-auto'>
      <ul className="flex items-center gap-5">
        <li className="tunes-link">
          <NavLink to={'/'} className='text-black hover:text-gray-500 duration-300 text-extrabold'>
            <h2 className='indent-8 text-2xl font-semibold animated-tunes'>Tunes</h2>
          </NavLink>
        </li>
        <form onSubmit={handleSubmit} className="flex-grow">
          <input
            type='text'
            name='search'
            placeholder='Enter Song Name'
            className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 hover:shadow-red-200 focus:shadow-red-300'
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
          />
        </form>
      </ul>
      <ul className="flex items-center gap-5">
        <li>
          <NavLink to={'/'} className='text-black hover:text-gray-600 duration-300 flex items-center gap-2'>
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/discover'} className='text-black hover:text-gray-600 duration-300 flex items-center gap-2'>
            <FontAwesomeIcon icon={faSearch} /> Discover
          </NavLink>
        </li>
        <li className="favorites-link">
          <NavLink to={'/favorites'} className='text-black hover:text-gray-600 duration-300 flex items-center gap-2'>
            <FontAwesomeIcon icon={faHeart} /> Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
