import mysql from "mysql2"

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'imdb'
}).promise()

export async function getMovies(){
    const result = await pool.query(`SELECT * from movie`)
    return result[0]
}

export async function getMovieById(id) {
    const result = await pool.query(`SELECT * FROM movie WHERE id = ?`, [id]);
    return result[0];
}

export async function addMovie(newMovie) {
    const result = await pool.query(`INSERT INTO movie (title, genre, release_date) VALUES (?,?,?)`, [newMovie.title, newMovie.genre,newMovie.release_date]);
    return result.insertId;
}

export async function deleteMovieById(id) {
    const result = await pool.query(`DELETE FROM movie WHERE id = ?`, [id]);
    return result[0]; 
}

export async function updateMovieById(movie) {
    const result = await pool.query(`UPDATE movie SET title = ?, genre = ?, release_date = ? WHERE id = ?`, [movie.title, movie.genre, movie.release_date, movie.id]);
    return result[0]; 
}
