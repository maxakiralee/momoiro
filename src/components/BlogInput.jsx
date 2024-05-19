import React, { useState } from 'react';
import styles from '../styling/BlogInput.module.css';

const InputForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    textEntry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform submission logic here
    console.log(formData);
    // Close the modal after submission
    onClose();
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Input Form</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </label>
          <br />
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Text Entry:
            <textarea name="textEntry" value={formData.textEntry} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
