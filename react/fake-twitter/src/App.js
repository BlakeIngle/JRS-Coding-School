import logo from './logo.svg';
import './App.css';
import TweetList from './components/TweetList';
import { useState } from 'react';

function App() {

  const [tweets, setTweets] = useState([])

  return (
    <div className="App">
      <TweetList />
    </div>
  );
}

export default App;
