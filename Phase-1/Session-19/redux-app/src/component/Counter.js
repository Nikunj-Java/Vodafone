import {useDispatch, useSelector} from 'react-redux';

function Counter(){

    const mycount=useSelector(state=>state.counter.count);
    const dispath=useDispatch();

    return(
        <div className='container bg-warning'>

            <h1>count: {mycount}</h1>

            <button  className='btn btn-primary' onClick={()=>dispath({type:"INCREMENT"})}>INCREMENT</button>
            <button  className='btn btn-danger' onClick={()=>dispath({type:"DECREMENT"})}>DECREMENT</button>
        </div>
    )
}
export default Counter;