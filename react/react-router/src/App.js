import logo from './logo.svg';
import './App.css';
import Dogs from './components/Dogs';
import Donuts from './components/Donuts';
import Hypocrite from './components/Hypocrite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/donuts" element={<Donuts />} ></Route>
        <Route path="*" element={<Hypocrite />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
