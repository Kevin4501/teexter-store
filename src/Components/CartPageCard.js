import React from "react";
import "./CartPageCard.css";
import { Context } from "./Context";
import { useContext } from 'react';

function CartPageCard(props) {
  let {cartProduct , setCartProduct} = useContext(Context)
  console.log(props.products_from_cartPage);
  console.log(props.products_from_cartPage.quantity)
  console.log(props)
  let quantity_ = props.products_from_cartPage.max_quantity
     let key_values = [];
     for(let i = 0 ; i<quantity_;i++){
        key_values.push(i+1)
 }
  console.log(key_values)

  const dropDownQuantity = (event)=>{
    
    let changedQuantity = cartProduct.map((products)=>{
        if(products.id===props.products_from_cartPage.id){
            return {
                ...products , quantity:parseInt(event.target.value)
            }
        }
        else{
            return products
        }
    })
    setCartProduct(changedQuantity)
  }
  return (
    <div style={{padding:"20px" , paddingLeft:"50px",paddingRight:"50px"}}>
      <div className="outerDiv">
            <div>
            <img  className="cartImage" src={props.products_from_cartPage.imageURL} />
            </div>
          
    
        <div className="name-price">
          <h4 className="name">{props.products_from_cartPage.name}</h4>
          <h4 className="price">Rs.{props.products_from_cartPage.price}</h4>
        </div>

        <div className="options">
        <select onChange={(event)=>dropDownQuantity(event)} defaultValue={props.products_from_cartPage.quantity}>
                {key_values.map((qty)=>
                <option value={qty} key={qty}>{qty}</option>
                )}
            </select>
        </div>
        <div className="delete-button">
                    <button className="delete" onClick={()=>props.deleteHandler(props.products_from_cartPage.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CartPageCard;

