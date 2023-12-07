import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import MoviesAdd from './components/movies-form/MoviesAdd';
import MoviesEdit from './components/movies-form/MoviesEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/'  element={<Movies />} />
        <Route  path='/movies/add'  element={<MoviesAdd />} />
        <Route  path='/movies/edit/:id'  element={<MoviesEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
