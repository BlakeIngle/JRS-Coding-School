import logo from './logo.svg';
import './App.css';
import Conditional from './components/Conditional';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(null);

  setTimeout(() => {
    setData(8);
  }, 2000);

  return (
    <div className="App">
      Nav bar
      {data && <Conditional />}
      Footer
    </div>
  );
}

export default App;
