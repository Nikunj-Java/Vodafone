import React from 'react';

function Child({data,setData}){
    return(
        <div>
            <h3>Child</h3>

            <p>{data}</p>
            <input type='text' value={data} onChange={setData}/>
        </div>
    )
}

export default Child; 