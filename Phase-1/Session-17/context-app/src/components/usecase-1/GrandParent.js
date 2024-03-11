import React, { useState } from 'react';
import Parent from './Parent';

function GrandParent(){

    const [data ,setData]=useState('Hello From Grand Parent');


    const changeData=(e)=>{
        setData(e.target.value);
    }

    return(
        <div>
            <Parent data={data} setData={changeData}/>
        </div>
    )
}

export default GrandParent; 