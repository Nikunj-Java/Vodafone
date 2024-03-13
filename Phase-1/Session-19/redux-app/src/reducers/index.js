import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CounterReducer from "./CounterReducer";
import UserReducer from "./UserReducer";


 


const rootReducer=combineReducers({
    counter:CounterReducer,
    itmes_cart:CartReducer,
    myuser:UserReducer,
  
 
})

export default rootReducer;