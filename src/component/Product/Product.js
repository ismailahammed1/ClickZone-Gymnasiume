// @ts-nocheck
import React from 'react';

const Product = (props) => {
   const {name, age,img, details,Timerequired}=props.product;
   
    return (
        <div className=" card w-60 shadow-xl bg-slate-400">
        <figure className="px-2 pt-2">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-left font-serif ">
          <h2 className="card-title font-bold ">name:{name}</h2>
          <p>{details}</p>
          <p>age:{age}</p>
          
          <p>Time-required:{Timerequired}s</p>
         
          <div className="card-actions">
          <button onClick={()=>props.handelAddtoCard(props.product)}
      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center absolute inset-x-0 bottom-0"
    >
      Add to order
        </button>
          </div>
        </div>
      </div>
    );
};

export default Product;