import { useSelector } from "react-redux"


export const Testdata=()=>{
    const user=useSelector(state=>state.myuser.user);

    return(<div>
        <h2 className="text-primary">User Details</h2>
        <h4 className="text-seconndary">Id: {user.id}</h4>
        <h4 className="text-danger">Name: {user.name}</h4>
    </div>)
}