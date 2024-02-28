
import React, { useEffect, useState } from "react";

function UserCaseInputValidation(){

    const [input,setInput]=useState('');
    const [isValid,setIsValid]=useState(false);

    useEffect(()=>{
        if(input.length<5){
            setIsValid(false);
        }
        else{
            setIsValid(true);
        }
    },[input]);



    return(
        <div>
            <form>
                <label>Write Somthing Here....</label>
                <input type="text" id='input' placeholder='Write Something' onChange={(e)=>{setInput(e.target.value)}}></input>

                <p><span style={isValid?{backgroundColor:'lightgreen'}:{backgroundColor:'lightpink'}}>{isValid?'Valid Input':'Invalid Input'}</span></p>
            </form>

        </div>
    );

}

export default UserCaseInputValidation;