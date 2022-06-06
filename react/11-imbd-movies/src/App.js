import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { useState } from 'react';
import { useHttp } from './services/Http.service';

function App() {

  const [movies, setMovies] = useState([]);
  const http = useHttp();

  function searchMovies(query) {
    http.getMoviesBySearch(query)
      .then((response) => {
        setMovies(response.data.results);
      });
  }

  return (
    <div className="App">

      <SearchBar onSubmit={searchMovies} />
      <br />
      <MovieList movies={movies} />

    </div>
  );
}

export default App;
