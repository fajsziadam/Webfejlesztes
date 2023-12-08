import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import MoviesAdd from './components/movies-form/MoviesAdd';
import MoviesEdit from './components/movies-form/MoviesEdit';
import Genre from './pages/Genre';
import GenreAdd from './components/genre-form/GenreAdd';
import GenreEdit from './components/genre-form/GenreEdit';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/'  element={<Movies />} />
        <Route  path='/movies/add'  element={<MoviesAdd />} />
        <Route  path='/movies/edit/:id'  element={<MoviesEdit />} />
        <Route path='/genres' element={<Genre />} />
        <Route path='/genres/add' element={<GenreAdd />} />
        <Route path='/genres/edit/:id' element={<GenreEdit />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
