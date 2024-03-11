
import React, { createContext, useContext, useState } from 'react'
const ThemedContext=createContext();

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('bg-dark');

    const toggleTheme=()=>{
        setTheme((prevTheme)=>prevTheme==='bg-dark'?'bg-warning':'bg-dark');
    }

    return (
        <ThemedContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemedContext.Provider>
    )

}

export const useThemeContex=()=>{
    return useContext(ThemedContext);
}