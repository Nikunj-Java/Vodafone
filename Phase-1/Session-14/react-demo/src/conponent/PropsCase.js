import React from "react";

function PropsCase(props){

    const myMsg=props.message;

    return(
        <div className="container">
            <h2>Hello!! {props.message}</h2>
            <h3>{myMsg}</h3>
        </div>
    )
}

export default PropsCase;