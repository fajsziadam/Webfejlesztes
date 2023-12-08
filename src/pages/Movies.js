import React, { useState, useEffect } from "react";
import axios from "axios"
import MoviesButtons from "../components/movies-buttons/MoviesButtons";
import MoviesTable from "../components/movies-table/MoviesTable";


function Movies(){
    
    const [movies, setMovies] = useState();
    const [selected, setSelected] = useState();
    
    useEffect(() => {
        axios.get('http://localhost:7000/movie', {
            headers: {
                'Content-Type': 'application/json'
            }}).then((response) => setMovies(response.data))

    }, [])

    const selectChangeHandler = (m) => {
        setSelected(m)
    } 

    const deleteHandler = () => {
        axios.delete(`http://localhost:7000/movie/${selected.rowData.id}`, {
            headers: {
            'Content-Type': 'application/json'
        }}).then(() => {
            const temp = [...movies]
            temp.splice(selected.rowIndex, 1) 
            setMovies(temp)
        })
    }


    return <div>
        <MoviesButtons delete={deleteHandler} selected={selected}/>
        <MoviesTable movies={movies}  setSelected={selectChangeHandler} selected={selected} />
    </div>
} 

export default Movies;