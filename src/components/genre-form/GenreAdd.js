import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styles from './GenreAdd.module.css';

const GenreAdd = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:7000/genre', {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      const genreNames = response.data.map(genre => genre.name);
      setName(genreNames);
    });
  }, []);
  

  const addHandler = () => {
    const data = JSON.stringify({
      name: name,
    });

    axios.post('http://localhost:7000/genre', data, {
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
      <div className={styles.description}>➕  Add Genre</div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="genre name..."
          onChange={(e) => setName(e.target.value)}
        />
        <div className={styles.buttonsContainer}>
          <button className={`${styles.button} ${styles.buttonAdd}`} onClick={addHandler}>
            add
          </button>
          <button className={`${styles.button} ${styles.buttonCancel}`} onClick={cancelHandler}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenreAdd;
