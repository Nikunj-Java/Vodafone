import React, {useState} from "react";

function UseStateCase2(){


    const [isOn,setIsOn]=useState(false);


    return(
        <div className="container text-center">

            <button className="btn btn-warning" onClick={()=> setIsOn(!isOn)}>{isOn ? 'Turn OFF':'Turn ON'}</button>

            <p>The Button is {isOn ? 'on' :'off'}</p>
   
          
        </div>
    );
}

export default UseStateCase2;