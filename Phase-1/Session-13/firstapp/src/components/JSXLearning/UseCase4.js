import React from 'react';
function UseCase4() {

    const users = [
        { id: 1, name: 'Nikunj', email: 'nikunj@gmail.com', country: "INDIA" },
        { id: 2, name: 'Bob', email: 'bob@gmail.com', country: "UK" },
        { id: 3, name: 'jhon', email: 'jhon@gmail.com', country: "USA" },
        { id: 4, name: 'siri', email: 'siri@gmail.com', country: "UAE" },
        { id: 5, name: 'peter', email: 'peter@gmail.com', country: "UK" },
    ]
    return (<div>
        <h2>User's Data</h2>
        <table className='table table-striped table-bordered table-dark'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>);
}

export default UseCase4;