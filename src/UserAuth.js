import React, { useState } from 'react';
import styles from './styles.module.css'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    try{
      const userCredential=createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential,'userCredential');
      navigate("/form")
    }catch(error){
      console.log(error);
    }
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className={styles.top}>
      <Signup/>
      {/* <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <button onClick={handleSignUp}>Sign Up</button> */}

      {/* <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button> */}

      {error && <p>{error}</p>}
    </div>
  );
};

export default AuthComponent;

