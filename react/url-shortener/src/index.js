import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigatorComponent from './components/NavigatorComponent';
import LoginPage from './components/login/LoginPage';
import UserPage from './components/UserPage';
import SignUpPage from './components/login/SignUpPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<NavigatorComponent />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/:userId" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
