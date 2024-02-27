import React from "react";

function Login(){

    return( <div><h2>Login Here ....</h2></div>);
}


function Dashboard(){

    return(<div><h2>Dashboard Here ....</h2></div>);
}

function UseCase3(){

    const isLoggedIn= false;

    return(
        <div className="mt-3">
            <button className="btn btn-primary">{isLoggedIn ? "Logout":"Login"}</button>

            {isLoggedIn ? <Dashboard/>:<Login/>}
            
        </div>
    )
}

export default UseCase3;