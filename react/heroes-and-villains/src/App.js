import { Outlet } from 'react-router';
import './App.css';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <main>
        App
        <Outlet />
      </main>
      <Nav />
    </div>
  );
}

export default App;
