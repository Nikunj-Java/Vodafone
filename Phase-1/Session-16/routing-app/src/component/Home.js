


import React from "react";

import Slider from "./Slider";
import Featured from "./Featured";
import Footer from "./Footer";


function Home(){
    return(
        <div className="container-f">
           
            <Slider/>
            <Featured/>
            <Footer/>
        </div>
    )
}
export default Home;