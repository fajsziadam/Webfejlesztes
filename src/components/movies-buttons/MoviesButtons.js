import React from 'react';
import { useNavigate } from 'react-router';

const MoviesButtons = (props) => {

    const navigate = useNavigate()
    
    return (<div>
        <button onClick={() => navigate("/movies/add")}>add</button>
        <button onClick={() => navigate(`/movies/edit/${props.selected.rowData.id}`)}>edit</button>
        <button onClick={props.delete}>delete</button>
    </div>);
}
 
export default MoviesButtons;