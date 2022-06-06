import './App.css';
import Movies from './components/movies/movies';
import { useEffect, useState } from 'react';
import { fetchMoviesByTitle, fetchMoviesInTheatres } from './services/imdb.service'

function App() {

  var [inputText, setInputText] = useState('')

  var [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    if (inputText) {
      fetchMoviesByTitle(inputText)
        .then(response => response.json())
        .then(data => {
          if (data.results) {
            setMoviesResults(data.results)
          }
        });
    }
  }, [inputText])

  function getInTheatres() {
    console.log('sending request')
    fetchMoviesInTheatres()
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.items) {
          setMoviesResults(data.items)
        }
      });
  }

  return (
    <div className="App">
      <input type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)} />
      <button type="button"
        onClick={getInTheatres}>What's In Theatres</button>
      <Movies movies={moviesResults} />
    </div>
  );
}

export default App;
