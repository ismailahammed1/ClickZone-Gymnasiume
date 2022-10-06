// @ts-nocheck


import React, {useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import logo from '../../images/Ismail Ahammed.jpeg';
import './Profile.css'
const getLocalItems=()=>{
  let name=localStorage.getItem('lists');
  console.log(name);
      if(name){
        return JSON.parse(localStorage.getItem('lists'));
    }else{
      return[];
    }
}


const notify = () => toast("Activity Completed");
const Profile = (props) => {
  const {cart}=props;
  const [test, setTest]=useState(getLocalItems());

let total=0;
for(const product of cart){
    total=total+product.Timerequired;
    
}

useEffect(()=>{
  localStorage.setItem('lists', JSON.stringify(test));
},[test]);

   const thisIstest1 =()=>{
        let test = 10;
        setTest(test)
      }
   const thisIstest2 =()=>{
    let test = 20;
    setTest(test)
      }
   const thisIstest3 =()=>{
    let test = 30;
    setTest(test)
      }
   const thisIstest4 =()=>{
    let test = 40;
    setTest(test)
         
      }
   const thisIstest5 =()=>{
    let test = 50;
    setTest(test)

  
  
      }
    return (
        <div className='w-full profile'>
        <div className='flex text-center gap-3'> 
        <div className="">
    <img className="h-10 mx-auto object-cover rounded-full w-10 mt-2" src={logo} alt="" /> 
    </div>
        <div>
        <h1 className=' font-semibold'>Md.Ismail Ahammed</h1> 
        <p>Dhaka,Bangladesh</p>
        </div>
        </div>
        <div className='flex font-semibold gap-3 mt-7 bg-gray-600 rounded-md w-60 justify-center'>
<div className=' bg-emerald-100 rounded-full w-16 h-16 text-center font'>
    <h1 className='mt-2'>75㎏</h1>
    <p>Weight</p>
</div>
<div className=' bg-emerald-100 rounded-full w-16 h-16 text-center '>
    <h1 className='mt-2'>6.5</h1>
    <p>Height</p>
</div>
<div className=' bg-emerald-100 rounded-full w-16 h-16 text-center '>
    <h1 className='mt-2'>25yrs</h1>
    <p>Age</p>
</div>
        </div>
        <h1 className='font-semibold text-left mt-7'>Add Break</h1>
        <div className=" flex mt-4 h-10 rounded-md bg-violet-200
        ">
<div className=' flex justify-center ml-4'>
<button onClick={thisIstest1}
   className='rounded-full bg-slate-400 w-8 h-8 m-1  font-semibold cursor-pointer '>10s</button>
<button onClick={thisIstest2}
   className='rounded-full bg-slate-400 w-8 h-8 m-1  font-semibold cursor-pointer'>20s</button>
<button onClick={thisIstest3}
   className='rounded-full bg-slate-400 w-8 h-8 m-1  font-semibold cursor-pointer'>30s</button>
<button onClick={thisIstest4}
   className='rounded-full bg-slate-400 w-8 h-8 m-1  font-semibold cursor-pointer'>40s</button>
<button onClick={thisIstest5}
   className='rounded-full bg-slate-400 w-8 h-8 m-1  font-semibold cursor-pointer'>50s</button>
</div>
  




</div>
<div >
<h1 className='mt-7'>Exercise Details</h1>
    <p className=' bg-slate-400 font-semibold  rounded-md mt-7 '>Exercise time:{total}</p>
    <p className=' bg-slate-400 font-semibold mt-7 rounded-md '>Break time:{test}</p>
</div>


<div>
        <button className=' font-semibold  rounded-md mt-7 w-44 h-10 bg-red-300' onClick={notify}>Activity Completed</button>
        <ToastContainer />
      </div>
        </div>




    );
};

export default Profile;