import React, { useEffect } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from "./Login"
import {auth} from './firebase'
import {useStateValue} from './StateProvider';


function App() {

  const [{basket}, dispatch] = useStateValue();

//useEffect >>>>>>>>>>>>> powerful
//piece of code which runs based on given condition

useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged((authUser)=>{
    if (authUser){
      // the user is logged in....
      
dispatch({
  type:"SET_USER",
  user: authUser
})


    }else{
      //the user is logged out....
      dispatch({
        type:"SET_USER",
        user: null
      })
    }
  })

return () =>{
  // Any cleanupoperations go in there
unsubscribe();
};

},[]);

  return (
    <BrowserRouter>
   
    <div className="app">

      <Routes>
      <Route path="/checkout" element={<div><Header/> <Checkout/></div>}>
       
        </Route>

        <Route path="/login" element={<div><Login/></div>}>
          
          </Route>

{/* this is default route */}
        <Route path="/" element={<div><Header/> <Home/></div>}>
        
         
          </Route>

{/* this is for wrong url */}
          <Route path="*" element="ERROR 404">
          
          </Route>

      </Routes>
     
      
    </div>
   
    </BrowserRouter>
  );
}

export default App;
