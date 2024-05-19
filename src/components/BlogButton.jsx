import React, { useState } from 'react';
import InputForm from './BlogInput';
import styles from '../styling/BlogButton.module.css';

const ButtonComponent = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleFormVisibility}>
        Input your entry here!
      </button>
      {isFormVisible && <InputForm onClose={toggleFormVisibility} />}
    </div>
  );
};

export default ButtonComponent;