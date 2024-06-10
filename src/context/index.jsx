import { createContext, useState } from "react";

export const globalContext= createContext(null);

export default function globalState({children}){

    const [searchParam,setSearchParam]= useState();

    return <globalContext.Provider>{children}</globalContext.Provider>
}