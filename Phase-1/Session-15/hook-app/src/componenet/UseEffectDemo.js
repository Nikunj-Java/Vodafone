import React, { useEffect } from 'react'

function UseEffectDemo(){

    useEffect(()=>{
        console.log("Running in Background.....!");
    })
    return(
        <div>
                <h2>I am At UseEffect Page</h2>
        </div>
    );
}

export default UseEffectDemo;