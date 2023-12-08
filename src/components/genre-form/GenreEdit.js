import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import styles from './GenreEdit.module.css';

const GenreEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:7000/genre/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => setName(response.data[0].name));
  }, [id]);

  const editHandler = () => {
    const data = JSON.stringify({
      name: name,
    });

    axios.put(`http://localhost:7000/genre/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => navigate('/genres'));
  };

  const cancelHandler = () => {
    navigate('/genres');
  };

  return (
    <div className={styles.container}>
      <div className={styles.description}>🎬  Edit Genre</div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          value={name}
          type="text"
          placeholder="name..."
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />
        <div className={styles.buttonsContainer}>
          <button onClick={editHandler} className={`${styles.button} ${styles.buttonEdit}`}>
            edit
          </button>
          <button onClick={cancelHandler} className={`${styles.button} ${styles.buttonCancel}`}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenreEdit;
