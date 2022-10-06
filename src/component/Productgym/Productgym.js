// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Profile from '../Profile/Profile';

import './Productgym.css'
// const getLocalTime=()=>{
//     let name=localStorage.getItem('lists');
//     console.log(name);
//         if(name){
//           return JSON.parse(localStorage.getItem('lists'));
//       }else{
//         return[];
//       }
//   }
const Productgym = (props) => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);
  
    // const [test, setTest]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then((response) => response.json())
  .then((data) => setProducts(data));
    },[])


    const handelAddtoCard=(product)=>{
        
        const newCart=[...cart,product]
        setCart(newCart);
    }

    return (
<div className='m-9 product-temp gap-6'>
<div className='card-temp'>   
    {products.map(product=><Product 
    key={product.id}
    product={product}
    handelAddtoCard={handelAddtoCard}
   
    ></Product>)}
    

</div>
<div>
    <Profile 
    cart={cart}
    // thisIstest={thisIstest}
    ></Profile>
    
</div>

</div>
    );
};

export default Productgym;
