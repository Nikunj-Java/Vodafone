import React, { useState } from 'react';

import MyContextProvider from './MyContext';
import MyParent from './MyParent'

function GrandParent(){

   

    return(
        <MyContextProvider>
            <h1>Grand Parent</h1>
            <MyParent/>
        </MyContextProvider>
    )
}

export default GrandParent; 