import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css'
import { useNavigate } from 'react-router';
import { auth } from '../firebase';
import { signOut } from '@firebase/auth';

const Googleform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/sample/submitForm', formData);
      alert('Form submitted successfully!');
      // Clear form after submission
      setFormData({ name: '', email: '', message: '' });
      signOut(auth)
      // localStorage.removeItem('token');
      // localStorage.removeItem('user');
      navigate('/login')
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={styles.google_form_container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Education*</label>
        <textarea
          name="education"
          value={formData.education}
          placeholder="Education"
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Skills & Qualification</label>
        <textarea
          name="skills"
          value={formData.skills}
          placeholder="Skills & Qualification"
          onChange={handleChange}
        />
        <label htmlFor="name">LinkedIn Profile</label>
        <textarea
          name="linkedn_profile"
          value={formData.linkedn_profile}
          placeholder="LinkedIn Profile"
          onChange={handleChange}
        />
        <label htmlFor="name">Current CTC(in lakhs)</label>
        <textarea
          name="current_ctc"
          value={formData.current_ctc}
          placeholder="Current CTC(in lakhs)"
          onChange={handleChange}
        />
        <label htmlFor="name">Expected CTC</label>
        <textarea
          name="expected_ctc"
          value={formData.expected_ctc}
          placeholder="Expected CTC"
          onChange={handleChange}
        />
        <label htmlFor="name">References</label>
        <textarea
          name="references"
          value={formData.references}
          placeholder="References"
          onChange={handleChange}
        />
        <label htmlFor="resume">Resume (PDF, DOCX)*</label>
        <input
          type="file"
          name="resume"
          accept=".pdf, .docx"
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Message</label>
        <textarea
          name="message"
          value={formData.message}
          placeholder="Message"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Googleform;
