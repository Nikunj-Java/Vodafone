import React, { useReducer } from "react"


const UPDATE_FILED="UPDATE_FILED";
const SUBMIT_FORM="SUBMIT_FORM";

const formReducer=(state,action)=>{
    switch (action.type) {
        case UPDATE_FILED:
            return {...state,[action.field]:action.value}
        case SUBMIT_FORM:
            console.log('Form Submitted',state);
            return state;
    
        default:
            return state;
    }
}

function SimpleForm(){

    const initialFormState={firstname:'',lastname:'',email:''};

    const [formState,dispatch]=useReducer(formReducer,initialFormState);


    const handleFieldChange=(field,value)=>{
        dispatch(
            {
                type:UPDATE_FILED,field,value
            }
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type:SUBMIT_FORM});
    }

    return(
        <div>
            <h3>Simple Form Using useReducer</h3>

            <form onSubmit={handleSubmit}>
                <label>FirstName:</label>
                <input type="text" value={formState.firstname} onChange={(e)=>{handleFieldChange('firstname',e.target.value)}}></input>

                <label>LastName:</label>
                <input type="text" value={formState.lastname} onChange={(e)=>{handleFieldChange('lastname',e.target.value)}}></input>

                <label>Email</label>
                <input type="text" value={formState.email} onChange={(e)=>{handleFieldChange('email',e.target.value)}}></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm;