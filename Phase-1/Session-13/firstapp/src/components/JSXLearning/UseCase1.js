import React from 'react';

function UseCase1(){

    const height=500;
    const imgUrl='https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png';

    const name="Simplilearn-Vodafone Training!"
    const ele1=<h1>Hello JSX!!!</h1>
    const ele2=<h2>Welcome to {name}</h2>

    return(
        <div className='container-fluid'>
            <h1 className='text-success bg-warning'>JSX Examples</h1>
            {ele2}
            {ele1}
            <img src={imgUrl} height={height} width='100%'/>
        </div>
    )


}

export default UseCase1;