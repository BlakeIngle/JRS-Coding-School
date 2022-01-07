import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import HeroPage from './components/HeroPage';
import HeroInfo from './components/HeroInfo';
import HeroesApp from './components/HeroesApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HeroesApp />}>
          <Route index element={<HomePage />} ></Route>
          <Route path="hero" element={<HeroPage />} >
            <Route index element={<div>No heroes here :(</div>} >            </Route>
            <Route path=":heroId" element={<HeroInfo />} ></Route>
          </Route>
          <Route path="*" element={<div>404 - page not found</div>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
