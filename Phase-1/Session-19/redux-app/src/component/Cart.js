import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux"



export const Cart=()=>{
    const items=useSelector(state=>state.itmes_cart.items);
    const dispath=useDispatch();

    const [newItem,setNewItem]=useState('');


    const handleAddItem=()=>{
        dispath({type:"ADD_ITEM",payload:{id:Date.now(),name:newItem}});
        setNewItem('');
    }

    const handleRemoveItem=(itemId)=>{
        dispath({type:"REMOVE_ITEM",payload:itemId})
    }

    return(
        <div>
            <h2>Item List in a CART</h2>

            <ul>
                {items.map(item=>{
                    return(<li key={item.id}>{item.name} <button onClick={()=>{handleRemoveItem(item.id)}}>Remove Item</button></li>)
                })}
            </ul>

            <div>
                <input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} placeholder="Enter Name of Item"/>
                <button onClick={handleAddItem}>Add item</button>
            </div>
        </div>
    )
}