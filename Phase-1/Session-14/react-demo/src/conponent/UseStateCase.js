import React,{useState} from "react";
import { Button } from "react-bootstrap";


function UseStateCase(){

    const [count,setCount]=useState(0);
    return(
        <div className="container-f text-info text-center">
            <h1>Welcome to the World of Hooks</h1>

            <div className="row text-danger">
                <p>Count:{count}</p>
                <Button onClick={()=>setCount(count + 1)}>Increment</Button>
                <Button onClick={()=>setCount(count - 1)}>Decrement</Button>
            </div>
        </div>
    )
}

export default UseStateCase;