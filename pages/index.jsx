
import Link from 'next/link';
import React, { useState, useContext } from "react";
import { Context } from "../context";
import {signup} from '../actions';
import {signin} from '../actions';
const Index = () => {

  const { state, dispatch } = useContext(Context);


  const handleclick=async()=>{
try {
  const response= await signup({
    password:'usman',
      email:"pkmjkhdhskkhkl.com"
    });

    dispatch({ type: "AUTH_USER", payload: response.data.token });
    localStorage.setItem('token', response.data.token);

} catch (error) {
  dispatch({ type: "AUTH_ERROR", payload: error.error});
  
}

  }


const handelogin= async()=>{
  try {
    const response= await signin({
      password:'usma7n',
        email:"pkmjkhdhskkhkl.com"
      })
    
      // console.log("response "+response.data.token);
  dispatch({ type: "AUTH_USER", payload: response.data.token });

    
  } catch (error) {
    console.log("error "+error);
dispatch({ type: "AUTH_ERROR", payload: error });

    
  }
 


}
  



  
  return (
   <div>
     <button onClick={handleclick}>logIN</button>
     <Link href="profile">
       <a>go</a>
     </Link>


     {JSON.stringify(state,null,4)}


     <button 
     onClick={handelogin}
     >provide</button>
   </div>
  );
};

export default Index;

