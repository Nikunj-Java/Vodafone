import { useThemeContex } from "./ThemeContext";
import React from "react";

function ThemedComponent(){

    const {theme,toggleTheme}=useThemeContex();

    return (
        <div style={{backgroundColor:theme==='light'?'#fff':'#333',color:theme==='light' ? '#333':'#fff'}}>
            <p>This is a Themed Component</p>

            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    
        )
}

export default ThemedComponent;