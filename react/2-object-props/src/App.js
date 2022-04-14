import logo from './logo.svg';
import './App.css';
import ProfileCard from './components/ProfileCard';
import data from './data'

function App() {

  return (
    <div className="App">

      {data.map(profile => (
        <ProfileCard key={profile.id} {...profile} />
      ))}

    </div>
  );
}

export default App;
