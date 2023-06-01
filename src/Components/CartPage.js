import React from "react";
import { Typography } from "@mui/material";
import Header from "./Header";
import theme from "../theme";
import CartPageCard from "./CartPageCard";
import { Context } from "./Context";
import { useContext } from 'react';
import './CartPage.css'
function CartPage(props) {
    let {cartProduct , setCartProduct} = useContext(Context)
    console.log(cartProduct)
    const deleteHandler=(id)=>{
        let deletedProduct= cartProduct.filter((cartProduct)=> cartProduct.id!==id);
        setCartProduct(deletedProduct)
      };

      let total_amount = 0
      for(let i=0 ; i<cartProduct.length ; i++){
        total_amount += cartProduct[i].price*cartProduct[i].quantity
      }
      
  return (
    <div>
      <Typography theme={theme}>
        <Header />
      </Typography>
      <div>
        <h1 className="shopping-title">SHOPPING CART</h1>
        <div>
          {cartProduct.map((cartProduct) => (
            <CartPageCard
              key={cartProduct.id}
              products_from_cartPage={cartProduct}
            deleteHandler={deleteHandler}
            />
          ))}
        </div>
        <div>
          <h3 className="total-amount"
          >
            Total Amount : Rs {total_amount}
          </h3>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default CartPage;
