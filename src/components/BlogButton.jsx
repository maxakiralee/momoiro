import React, { useState } from 'react';
import BlogInput from './BlogInput';
import styles from '../styling/BlogButton.module.css';

const BlogButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleFormVisibility}>
        Input your entry here!
      </button>
      {isFormVisible && <BlogInput onClose={toggleFormVisibility} />}
    </div>
  );
};

export default BlogButton;