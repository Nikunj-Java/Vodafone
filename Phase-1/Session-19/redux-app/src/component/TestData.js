import { useSelector } from "react-redux"


export const Testdata=()=>{
    const user=useSelector(state=>state.myuser.user);

    return(<div>
        <h2>User Details</h2>
        <h4>{user.id},{user.name}</h4>
    </div>)
}