import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context'

export default function Navbar() {

    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
    console.log(searchParam);
    return (
        <nav className='flex justify-between items-center py-6 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
            <ul>
                <li>
                    <NavLink to={'/'} className='text-black hover:text-gray-500 duration-300 text-extrabold' ><h2 className='text-2xl font-semibold'>Tunes</h2></NavLink>
                </li>
            </ul>
            <form onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder='Enter Song Name'
                    className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 hover:shadow-red-200 focus:shadow-red-300'
                    value={searchParam}
                    onChange={(event) => setSearchParam(event.target.value)}
                />
            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink to={'/'} className='text-black hover:text-gray-600 duration-300' >Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favorites'} className='text-black hover:text-gray-600 duration-300' >Favourites</NavLink>
                </li>
            </ul>
        </nav>
    )
}
