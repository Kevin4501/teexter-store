import React from 'react';
import "./CardProducts.css";
import { Context } from './Context';
import { useContext } from 'react';

function CardProducts(props) {
    let {cartProduct , setCartProduct} = useContext(Context)
    console.log(cartProduct)
    console.log(props.datas)
    const {imageURL,name,price,quantity}=props.datas
    console.log(quantity)
    const addToCart = ()=>{
        let cartProd = {
            id : props.datas.id,
            imageURL,
            name,
            price,
            quantity:1,
            max_quantity : props.datas.quantity
        }
        setCartProduct([...cartProduct,cartProd])
        console.log(cartProduct)
    }
    const increament = (id)=>{
        if(checkCart[0].quantity>=props.datas.quantity){
            alert("max")
        }
        else{
            let updated_data_add = cartProduct.map((cartProduct)=>{
                if(cartProduct.id===id){
                    
                        cartProduct.quantity+=1
                        return{
                            ...cartProduct,quantity:cartProduct.quantity
                        }
                    
                }
                
                
                else{
                    return {...cartProduct,quantity:cartProduct.quantity}
                }
            })
            setCartProduct(updated_data_add)
        }
 
    }
    
    const decreament = (id)=>{
        let updated_data_sub = cartProduct.map((cartProduct)=>{
            if(cartProduct.id===id ){
                if(cartProduct.quantity>1){
                    cartProduct.quantity-=1
                    return{
                        ...cartProduct,quantity:cartProduct.quantity
                    }
                }
                else{
                    return {
                        ...cartProduct , quantity:cartProduct.quantity
                    }
                }
            }
            else{
                return cartProduct
            }
        })
        setCartProduct(updated_data_sub)
    }
    const checkCart = cartProduct.filter((datas)=>datas.id===props.datas.id)

    console.log(checkCart)
    return (
        <div>
            <div className='card'  id={props.datas.id}>
                <h4 className='card-name'>{props.datas.name}</h4>
                <img src = {props.datas.imageURL} alt={props.datas.imageURL} width="100%" height = "100%"/>
                <div className='card-content'>
                    <h3 className='card-price'>Rs{props.datas.price}</h3>
                    {
                        checkCart.length<1?<button className='card-button' value = {props.datas.id} onClick={addToCart} >Add to Cart</button> :

                        <div className='add-sub-buttons'>
                            <button className='add-button' onClick={()=>increament(props.datas.id)} >+</button>
                            <span className='quantity'>{checkCart[0].quantity}</span>
                            <button className='sub-button' onClick={()=>decreament(props.datas.id)}>-</button>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default CardProducts;
