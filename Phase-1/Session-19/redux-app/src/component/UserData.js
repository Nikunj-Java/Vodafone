import { useState } from "react";
import { useDispatch} from "react-redux"

export const UserData=()=>{

    
    const dispatch=useDispatch();

    const [newItem,setNewItem]=useState('');

    const login=()=>{
        dispatch({type:"SUCCESS",payload:{id:Date.now(),name:newItem}});
        setNewItem('');
    }

    return(
        <div>
            <h2>User Login</h2>
            <div>
                <input type="text" onChange={e=>setNewItem(e.target.value)} placeholder="Enter Youe Name"></input>
                <button className="btn btn-success" onClick={login} >Login </button>
            </div>
        </div> 
    )
}