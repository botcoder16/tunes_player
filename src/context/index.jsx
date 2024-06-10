import { createContext, useState } from "react";

export const GlobalContext= createContext(null);

export default function GlobalState({children}){

    const [searchParam,setSearchParam]= useState("");
    const [loading,setLoading]= useState(true);
    const [songList, setSongList]=  useState()

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const res = await fetch(`https://v1.nocodeapi.com/botcoder/spotify/iBOkboZEwHjAQddq/search?q=${searchParam}&type=track`);
            const data= await res.json();
            if(data?.tracks?.items){
                setSongList(data.tracks.items)
                setLoading(false)
                setSearchParam('')
            }
        } catch (e) {
            setLoading(false)
            setSearchParam('')            
        }
    }

    return <GlobalContext.Provider value={{searchParam, loading, songList ,setSearchParam, handleSubmit}}>{children}</GlobalContext.Provider>
}