import React from 'react';
import { useNavigate } from 'react-router';
import styles from './MoviesButtons.module.css';

const MoviesButtons = (props) => {
    const navigate = useNavigate();

    const handleEditClick = () => {
        if (props.selected && props.selected.rowData && props.selected.rowData.id) {
            navigate(`/movies/edit/${props.selected.rowData.id}`);
        } else {
            console.error('Invalid selection for edit');
        }
    };

    return (
        <div>
        <div className={styles.description}>🎥  Movies</div>
          <div className={styles.buttonsContainer}>
            <button className={`${styles.button} ${styles.buttonAdd}`} onClick={() => navigate("/movies/add")}>add</button>
            <button className={`${styles.button} ${styles.buttonEdit}`} onClick={handleEditClick}>edit</button>
            <button className={`${styles.button} ${styles.buttonDelete}`} onClick={props.delete}>delete</button>
            <button className={`${styles.button} ${styles.buttonGenre}`} onClick={() => navigate('/genres')}>Genre</button>
          </div>
        </div>
      ); 
};

export default MoviesButtons;
