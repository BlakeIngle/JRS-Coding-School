import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UserPage from './components/UserPage';
import { createContext, useEffect, useState } from 'react';
import BookPage from './components/BookPage';
import ListPage from './components/ListPage';

const axiosService = require('./services/axios.service');
const localStorageService = require('./services/localStorage.service');

export const Context = createContext();

function App() {

  const [state, setState] = useState({
    user: undefined
  });

  useEffect(() => {
    var activeUser = localStorageService.getActiveUser();
    if (activeUser) {
      setState({ ...state, user: activeUser });
    }
  }, []);

  return (
    <Context.Provider value={{
      http: axiosService,
      localStorageService,
      state,
      setState
    }} >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/user/:userId" element={<UserPage />}></Route>
            <Route path="*" element={<div>404 - page does not exist</div>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
