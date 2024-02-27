import React from "react";
import PropsCase2 from "./PropCase2";

function PropsCase(props){

    const myMsg=props.message;

    return(
        <div className="container">
            <h2>Hello!! {props.message}</h2>
            <h3>{myMsg}</h3>
            <PropsCase2 message="Hello Child...!!!!" />
        </div>
    )
}

export default PropsCase;