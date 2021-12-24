import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter';
import TitleUpdater from './components/titleUpdater/titleUpdater';
import FetchData from './components/fetchData/fetchData';

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <TitleUpdater />
      <br />
      <FetchData />
    </div>
  );
}

export default App;
