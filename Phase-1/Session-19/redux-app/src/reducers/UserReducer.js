const initialState={
    user:{}
};


const UserReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "SUCCESS":
            
            return{...state,user:action.payload}
    
        default:
            return state;
    }
}

export default UserReducer;