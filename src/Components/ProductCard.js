import React from 'react';

function ProductCard(props) {
    console.log(props.datas)
    return (
        <div>
            <div className='outerDiv'>
                <h4>{props.datas.name}</h4>
            </div>
        </div>
    );
}

export default ProductCard;

{/* <div style={{backgroundColor:'#f2f2f2', padding:'10px 20px'}}>
<h3 style={{position:'absolute', zIndex:'auto'}}>{name}</h3>
<img src={imageURL} alt={imageURL} width='100%' height='200px'/>
<div style={{display:'flex', justifyContent:'space-between'}}>
    <h3>Rs {price}</h3>
   {Existcart.length<1?
    <button style={{width:'100px', height:'30px', backgroundColor:'black',color:'white',cursor:'pointer', marginTop:'15px'}}
    onClick={AddToCart}
    >Add to Cart</button>:
    <div style={{color: 'black', marginTop:'15px'}}>
      <button
      style={{width:'35px',height:'30px', backgroundColor:'black',color:'white',cursor:'pointer'}}
      onClick={()=>handleCount(el.id,-1)}
      disabled={Existcart[0].quantity==1}>-</button>
      <span style={{padding:'6px 7px', backgroundColor:'black',color:'white'}}>{Existcart[0].quantity}</span>
      <button
      style={{width:'35px',height:'30px', backgroundColor:'black',color:'white',cursor:'pointer'}}
      onClick={handleIncrementAndAlert}>+</button>
    </div>
  }
</div>
</div> */}