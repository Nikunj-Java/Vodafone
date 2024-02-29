

import React, { useEffect, useState } from "react";
import axios from "axios";


function UnList(){

    const [users,setUsers]=useState([]);
    const getData= async()=>{

        try {
            
            //backend data fetch: http://localhost:8080/api/auth/users/
            //task:http://universities.hipolabs.com/search?country=india
            const resp=await axios.get('http://universities.hipolabs.com/search?country=india');
            console.log(resp.data);
            setUsers(resp.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getData(); //function call when component will load for very first time
    },[])

    return(
        <div className="container">
            <h1 className="bg-secondary text-warning">Universities List In INDIA</h1>
            <h2>Task: to set the data in table</h2>
            <h2 className="text-center">Usel List</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th> <th>WebPage</th> <th>Country</th> <th>Country Code</th><th>Domains</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item)=>{
                            return(<tr key={item.country}>
                                <td>{item.name}</td>
                                <td>{item.web_pages}</td>
                                <td>{item.country}</td>
                                <td>{item.alpha_two_code}</td>
                                <td>{item.domains}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default UnList;