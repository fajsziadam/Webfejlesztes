import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenreButtons from '../components/genre-buttons/GenreButtons';
import GenreTable from '../components/genre-table/GenreTable';

function Genre() {

  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    axios.get('http://localhost:7000/genre', {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => setGenres(response.data));
  }, [])

  const selectChangeHandler = (genre) => {
    setSelected(genre)
  }

  const deleteHandler = () => {
    axios.delete(`http://localhost:7000/genre/${selected.rowData.id}`, {
      headers: {
        'Content-Type': 'application/json',
      }}).then(() => {
      const temp = [...genres];
      temp.splice(selected.rowIndex, 1);
      setGenres(temp);
    })
  }

  return <div>
      <GenreButtons delete={deleteHandler} selected={selected} />
      <GenreTable genres={genres} setSelected={selectChangeHandler} selected={selected} />
    </div>
}

export default Genre;
