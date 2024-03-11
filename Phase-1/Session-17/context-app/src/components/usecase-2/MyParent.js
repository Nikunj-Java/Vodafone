import React from 'react';
import Child from './MyChild';
import MyChild from './MyChild';

function MyParent(){
    
    return(
        <div>
            <h2>Parent</h2>

           <MyChild/>
        </div>
    )
}

export default MyParent; 