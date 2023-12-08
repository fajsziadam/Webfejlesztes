import React from 'react';
import { useNavigate } from 'react-router';
import styles from './GenreButtons.module.css';

const GenreButtons = (props) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    if (props.selected && props.selected.rowData && props.selected.rowData.id) {
      navigate(`/genres/edit/${props.selected.rowData.id}`);
    } else {
      console.error('Invalid selection for edit');
    }
  };

  return (
    <div>
      <div className={styles.description}>📓 Genres</div>
      <div className={styles.buttonsContainer}>
        <button className={`${styles.button} ${styles.buttonAdd}`} onClick={() => navigate("/genres/add")}>add</button>
        <button className={`${styles.button} ${styles.buttonEdit}`} onClick={handleEditClick}>edit</button>
        <button className={`${styles.button} ${styles.buttonDelete}`} onClick={props.delete}>delete</button>
        <button className={`${styles.button} ${styles.buttonMovies}`} onClick={() => navigate('/')}>Movies</button>
      </div>
    </div>
  );
};

export default GenreButtons;
