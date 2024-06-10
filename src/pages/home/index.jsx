import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

function Home() {
const {songList,loading} = useContext(GlobalContext);


  return (
    <div className='py-8 container mx-auto flex flex-wrap'></div>
  )
}

export default Home