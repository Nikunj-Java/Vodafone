
import React,{useState} from "react";
function UseStateCase3(){

    const[inputValue,setInputValue]=useState('');

    //to handle input change
    const handleInputChange=(event)=>{
       setInputValue(event.target.value);
    };

    //to handle submit action

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Submitted Value: "+inputValue);
        setInputValue(''); //clearing input value after submit
    };

    return(
        <div className="container bg-dark text-primary">

            <form onSubmit={handleSubmit}>

            <lable>Enter Your Text: </lable>
            <input type="text" value={inputValue} onChange={handleInputChange}/>

            <button type="submit" >Submit</button>
            </form>

        </div>
    );

}

export default UseStateCase3;