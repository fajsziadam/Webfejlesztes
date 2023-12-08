import express from "express"
import cors from "cors"
import { getMovieById, getMovies, addMovie, deleteMovieById, updateMovieById, getGenres, getGenresById, deleteGenreById, updateGenreById, addGenre } from "./query.mjs"

const app = express()

app.use(express.json())
app.use(cors({
    origin: "*"
}))


app.get("/movie", async (req, res) => {
    const result = await getMovies()
    res.send(result)
})

app.get("/genre", async (req, res) => {
    const result = await getGenres()
    res.send(result)
})

app.get("/movie/:id", async (req, res) => {
    const id = req.params.id
    const result = await getMovieById(id)
    res.send(result)
})

app.get("/genre/:id", async (req, res) => {
    const id = req.params.id
    const result = await getGenresById(id)
    res.send(result)
})

app.post("/movie", async (req, res) => {
    const new_movie = req.body
    const result = await addMovie(new_movie)
    res.send(result)
})

app.post("/genre", async (req, res) => {
    const new_genre = req.body
    const result = await addGenre(new_genre)
    res.send(result)
})

app.delete("/movie/:id", async (req, res) => {
    const id = req.params.id
    const result = await deleteMovieById(id)
    res.send(result)
})

app.delete("/genre/:id", async (req, res) => {
    const id = req.params.id
    const result = await deleteGenreById(id)
    res.send(result)
})

app.put("/movie/:id", async (req, res) => {
    const id = req.params.id
    const {title, genre, release_date} = req.body
    const product = await getMovieById(id).then((result) => {
        if (title) result[0].title = title;
        if (genre) result[0].genre = genre;
        if (release_date) result[0].release_date = release_date;
        return result[0]
    }).then(async (result) => {
        const query = await updateMovieById(result)
        res.send(result)
    })
})

app.put("/genre/:id", async (req, res) => {
    const id = req.params.id
    const { name } = req.body

    try {
        const updatedGenre = await getGenresById(id).then((result) => {
            if (name) result[0].name = name;
            return result[0];
        });

        const queryResult = await updateGenreById(updatedGenre);
        res.send(updatedGenre);
    } catch (error) {
        console.error("Error updating genre:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(7000)