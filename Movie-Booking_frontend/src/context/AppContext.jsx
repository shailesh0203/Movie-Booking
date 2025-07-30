
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";


export const AppContext=createContext()

export const AppProvider=({children})=>{

    const [isAdmin,setIsAdmin]=useState(false)
    const [favoriteMovies,setFavoriteMovies]=useState([])
    const value={}
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>useContext(AppContext)