import React, { useState } from 'react';
import Modal from 'react-modal';
import InputForm from './BlogInput';
import styles from '../styling/BlogButton.module.css';

const ButtonComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={openModal}>Input your entry here!</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Input Form"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%', /* Increase modal width */
            height: '80%',
            padding: '20px', /* Add padding */
          },
        }}
      >
        <InputForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default ButtonComponent;
