import React from "react"

function UseCase2(){

    const product={id:1 , name:"Pencil", price:10, rating:4.5};

    return(
        <div>
            {JSON.stringify(product)};

            <h3>Id: {product.id}</h3>
            <h3>Name: {product.name}</h3>
            <h3>Price: {product.price}</h3>
            <h4 className={product.rating > 4 ? 'text-success':'text-danger'}>Rating: {product.rating}</h4>
        </div>
    )
}

export default UseCase2;