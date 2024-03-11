import { useThemeContex } from "./ThemeContext";
import React from "react";

function ThemedComponent() {

    const { theme, toggleTheme } = useThemeContex();

    return (

        <div className={theme} >
            <div className="contanier mt-5 mb-5 ml-5 mr-5" >
                <div className="row">
                <p className={theme==='bg-warning'?'text-primary':'#text-secondary'}>This is a Themed Component</p>
                <button className="btn btn-primary" onClick={toggleTheme} >Toggle Theme</button>

                </div>
                
            </div>

        </div>

    )
}

export default ThemedComponent;