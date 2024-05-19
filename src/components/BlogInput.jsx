import React, { useState } from 'react';
import styles from '../styling/BlogInput.module.css';

const BlogInput = ({ onClose }) => {
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

    // Create the blog skeleton
    const blog = {
      name: formData.name,
      email: formData.email,
      title: formData.title,
      post: formData.textEntry
    };

    // Post the blog to the database
    fetch('http://localhost:5174/api/blog', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(blog),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error: ', error));

    console.log(formData);
    // Close the modal after submission
    onClose();
  };

  return (
    <div className={styles.form}>
    <form onSubmit={handleSubmit}>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        Text Entry:
        <textarea name="textEntry" value={formData.textEntry} onChange={handleChange} />
        <div className={styles.buttongroup}>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </div>
    </form>
  </div>
  );
};

export default BlogInput;
