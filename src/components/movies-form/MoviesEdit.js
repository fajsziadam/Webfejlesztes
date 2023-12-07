import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const MoviesEdit = () => {

    const {id} = useParams()

    const navigate = useNavigate()
    
    const [genres,setGenres] = useState([])
    const [title,setTitle] = useState()
    const [genre,setGenre] = useState()
    const [release_date,setReleasedate] = useState()

    useEffect(() => {
        axios.get("http://localhost:7000/genre", {
            headers: {
                'Content-Type': 'application/json'
            }}).then((response) => setGenres(response.data))
    })

    useEffect(() =>{
        axios.get(`http://localhost:7000/movie/${id}` ,{
            headers: {
            'Content-Type': 'application/json'
        }}).then(resp => { 
            console.log(resp)
            setTitle(resp.data[0].title)
            setGenre(resp.data[0].genre)
            setReleasedate(resp.data[0].release_date)
        })
    },[])

    const editHandler = () => {
        const data = JSON.stringify({
            title:title,
            genre:genre,
            release_date:release_date
        })
        axios.put(`http://localhost:7000/movie/${id}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }}).then(() => navigate("/"))
    } 

    const cancelHandler = () => {
        navigate("/")
    } 



    return ( <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <input value={title} type='text' placeholder='title...' onChange={(e) => setTitle(e.target.value)} />
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option></option>
                {genres.map((elem) => {
                return <option key={elem.id} value={elem.id}>{elem.name}</option>
            })}</select>
            <input value={release_date} type='text' placeholder='release date(YYYY-MM-DD)' onChange={(e) => setReleasedate(e.target.value)}/>
            <button onClick={editHandler}>edit</button>
            <button onClick={cancelHandler}>cancel</button>
        </form>
    </div> );
}
 
export default MoviesEdit;