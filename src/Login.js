import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import {Link,} from 'react-router-dom'
import {auth} from './firebase'


function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

const login =(event) =>{
event.preventDefault(); // this will stop refreshing the page
//do the login logic

auth.signInWithEmailAndPassword(email,password)
.then((auth)=>{
  // logged in redirect to homepage
  navigate('/');
})
.catch((e)=> alert(e.message));
};

const register =(event) =>{
  event.preventDefault(); // this will stop refreshing the page
  //do the register logic

  auth.createUserWithEmailAndPassword(email,password)
.then((auth)=>{
  // craete a user and logged in
  navigate('/');
})
.catch((e)=> alert(e.message));
};
  

  return (
    <div className='login'>

        <Link to = "/">
        <img className='login__logo' src="https://i.pinimg.com/originals/11/44/b7/1144b71d6d569a79b7a606649e9635c1.png"/>
        </Link>

<div className='login__container'>

<h1>Sign-In</h1>  

        <form>
            
       <h5>Email</h5>
       <input value={email} onChange={event=> setEmail(event.target.value)} type="email"/>
       <h5>Password</h5>
       <input value={password} onChange={event=> setPassword(event.target.value)} type="password"/>
       <button  onClick={login} type='submit' className='login__signInButton'>Sign In</button>

        </form>

        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button onClick={register} className='login__registerButton'>Create your Amazon account</button>

        </div>  
        </div>
  )
  }

export default Login;