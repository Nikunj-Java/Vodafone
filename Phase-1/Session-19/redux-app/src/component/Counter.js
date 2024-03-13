

import {useDispatch, useSelector} from 'react-redux';

function Counter(){

    const mycount=useSelector(state=>state.count);
    const dispath=useDispatch();

    return(
        <div>

            <p>count: {mycount}</p>

            <button  onClick={()=>dispath({type:"INCREMENT"})}>INCREMENT</button>
            <button  onClick={()=>dispath({type:"DECREMENT"})}>DECREMENT</button>
        </div>
    )
}
export default Counter;