
import React, { createContext, useContext, useState } from 'react'
const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('bg-info');

    const toggleTheme=()=>{
        setTheme((prevTheme)=>prevTheme==='bg-info'?'bg-warning':'bg-info');
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useThemeContex=()=>{
    return useContext(ThemeContext);
}