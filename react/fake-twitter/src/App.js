import logo from './logo.svg';
import './App.css';
import TweetList from './components/TweetList';
import { useState } from 'react';
import NewTweetForm from './components/NewTweetForm';

function App() {

  const [tweets, setTweets] = useState([]);

  return (
    <div className="App">
      <TweetList tweets={tweets} />
      <NewTweetForm
        tweets={tweets}
        setTweets={setTweets} />
    </div>
  );
}

export default App;
