import React from 'react'
import { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


const signIn = e => {
//code from firebase docs
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User Signed in :",user);
    history.push('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
//code end from firebase docs
    }

    const register = e => {
// Code from Firebase - Docs
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("user Signed Up:", user)
        history.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
// Code end from Firebase - Docs
    }

  return (
    
    <div className='login'>
        <Link to='/'>
            <img className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            >
            </img>
        </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
            <h5>Email</h5>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' value = {password} onChange = {e => setPassword(e.target.value)}/>
            <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
        </form>
        <p>By Sign in you Agree to view amazon clone terms and conditions of use off sales Please see our privacy policies, our cookies Notice and our Internet Based Ads Notice</p>
        <button className='login__registerButton' onClick={register}> Create Your Amazon Account</button>
      </div>
    </div>
  )
}
// import { formatMs } from '@material-ui/core'

export default Login
