import { createContext, useState } from "react";

export const GlobalContext= createContext(null);

export default function GlobalState({children}){

    const [searchParam,setSearchParam]= useState("");
    const [loading,setLoading]= useState(false);
    const [songList, setSongList]=  useState();
    const [songDetailsData, setSongDetailsData] = useState(null);

    async function handleSubmit(event){
        event.preventDefault();
        try {
            setLoading(true);
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

    return <GlobalContext.Provider value={{searchParam, loading, songList ,setSearchParam, handleSubmit, songDetailsData, setSongDetailsData}}>{children}</GlobalContext.Provider>
}