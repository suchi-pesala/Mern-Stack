// SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css'
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from './firebase';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });
  const [loginError, setLoginError] = useState(null);
  const handleSignUp = async(e) => {
    e.preventDefault();
    try{
      const userCredential=await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      console.log(userCredential,'userCredential');
      const user=userCredential.user;
      localStorage.setItem('token',user.accessToken);
      localStorage.setItem('user',JSON.stringify(user));
      navigate("/form")
    }catch(error){
      console.log(error);
      setLoginError("email already exists")
    }
  };

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  return (
    <div className={styles.google_form_container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        <button type='submit'>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
}

export default Signup;
