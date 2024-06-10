import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context';

function Details() {
  const {id} = useParams();
  const {songDetailsData, setSongDetailsData}= useContext(GlobalContext);
  

  useEffect(()=>{
    async function getSongDetails(){
      const response= await fetch(`https://v1.nocodeapi.com/botcoder/spotify/iBOkboZEwHjAQddq/tracks?ids=${id}`);
      const data = await response.json();
      
    }
    getSongDetails();
  },[])

  return (
    <div>
        details  
    </div>
  )
}

export default Details