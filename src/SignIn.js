// SignIn.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from './firebase';
import styles from './styles.module.css'

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });
  const [loginError, setLoginError] = useState(null);

  const handleSignIn = async(e) => {
    e.preventDefault();
    try{
      const userCredential= await signInWithEmailAndPassword(auth,formData.email, formData.password)
      console.log(userCredential,'userCredential');
      navigate("/form")
    }catch(error){
      console.log(error,'error123');
      setLoginError('Invalid email or password');
    }
  };

  // if (currentUser) {
  //   return <Navigate to="/dashboard" />;
  // }

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  return (
    <div className={styles.google_form_container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
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
        <button type='submit'>Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignIn;
