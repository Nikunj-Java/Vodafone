import { useReducer } from "react";

function reducer(state,action){
    if(action.type==='incremented_age'){
        return{
            age:state.age+1
        };

    }
    throw Error('Unknown Action');
}

function AgeCounter(){

    const [state,dispatch]=useReducer(reducer,{age:50});

    return(
        <div>

            <button onClick={()=>{dispatch({type:'incremented_age'})}}>Increment Age</button>
            <p>Hello...! You are {state.age} . Year Old</p>

        </div>
    )
}

export default AgeCounter;