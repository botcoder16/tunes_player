import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext= createContext(null);

export default function GlobalState({children}){

    const [searchParam,setSearchParam]= useState("");
    const [loading,setLoading]= useState(false);
    const [songList, setSongList]= useState();
    const [songDetailsData, setSongDetailsData] = useState('');
    const [favoritesList, setFavoritesList] = useState([]);
    const [discoverSongs, setDiscoverSongs] = useState();

    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`https://v1.nocodeapi.com/hello12341/spotify/EMUKgGrOeQtlTPTO/search?q=${searchParam}&type=track`);
            const data= await res.json();
            if(data?.tracks?.items){
                setSongList(data.tracks.items)
                setLoading(false)
                setSearchParam("")
                navigate('/')
            }
        } catch (e) {
            setLoading(false)
            setSearchParam('')            
        }
    }
    function handleAddToFavorite(getCurrentItem){
        let cpyFavoriteList = [...favoritesList];
        const index = cpyFavoriteList.findIndex(item=>item.id===getCurrentItem.id);

        if(index===-1){
            cpyFavoriteList.push(getCurrentItem);
        } else{
            cpyFavoriteList.splice(index);
        }
        setFavoritesList(cpyFavoriteList)
    }

    return <GlobalContext.Provider value={{discoverSongs, searchParam, loading, songList ,setSearchParam, handleSubmit, songDetailsData, setSongDetailsData, handleAddToFavorite, favoritesList, setDiscoverSongs}}>{children}</GlobalContext.Provider>
}