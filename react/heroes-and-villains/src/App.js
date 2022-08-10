import { Outlet } from 'react-router';
import './App.css';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      App
      <Outlet />
      <Nav />
    </div>
  );
}

export default App;
