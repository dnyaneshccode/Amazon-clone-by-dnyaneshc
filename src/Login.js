// import React from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Stop the page refresh.
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth =>{
                history.push('/');
            })
            .catch(error => alert(error.message))

    }


    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // It successfully created a new user with email and password.
            if (auth) {
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className="login">
        <Link to = '/'>
            <img className='login__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG16.png' />
        </Link>

        <div className='login__container'>
            <h1>Sign-In</h1>

            <form>
                <h5 >E-mail</h5>
                <input  type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type = 'submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p >By Signing In you Agree to AMAZON'S (CLONE DEVELOPED BY DNYANESHC) 
            Conditions of 
            User & Sale. Please see our Privacy Notice, our
             Cookies Notice and our Interest-Based Ads Notice.</p>

             <a href="/">Need Help</a>
             
             <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>

        </div>
        </div>
    )
}

export default Login;
