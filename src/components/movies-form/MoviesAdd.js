import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styles from './MoviesAdd.module.css'; 

const MoviesAdd = () => {
  const navigate = useNavigate();

  const [genres, setGenres] = useState([]);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [release_date, setReleasedate] = useState('');

  useEffect(() => {
    axios.get('http://localhost:7000/genre', {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => setGenres(response.data));
  }, []);

  const addhandler = () => {
    const data = JSON.stringify({
      title: title,
      genre: genre,
      release_date: release_date,
    });

    axios.post('http://localhost:7000/movie', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => navigate('/'));
  };
  
  const cancelHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
        <div className={styles.description}>➕  Add Movies</div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.inputField}
          type='text'
          placeholder='title...'
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          onChange={(e) => setGenre(e.target.value)}
          className={styles.inputField}
        >
          <option></option>
          {genres.map((elem) => (
            <option key={elem.id} value={elem.id}>
              {elem.name}
            </option>
          ))}
        </select>
        <input
          className={styles.inputField}
          type='text'
          placeholder='release date(YYYY-MM-DD)'
          onChange={(e) => setReleasedate(e.target.value)}
        />
        <div className={styles.buttonsContainer}>
          <button className={`${styles.button} ${styles.buttonAdd}`} onClick={addhandler}>
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

export default MoviesAdd;
