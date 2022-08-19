import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import UrlForm from './components/UrlForm';
import UrlSearch from './components/UrlSearch';
import { useLocalStorage } from './services/localStorage.service';

function App() {

  const ls = useLocalStorage();
  const navigate = useNavigate();
  var user = ls.getUser();

  function onLogoutClicked() {
    ls.removeUser();
    navigate('/users/login');
  }

  const loginButton = (
    <button onClick={() => {
      navigate('/user/login');
    }}>
      Log In
    </button>
  );

  const logoutButton = (
    <button onClick={onLogoutClicked}>
      Log Out
    </button>
  );

  return (
    <div className="App">
      <nav>
        {user && (
          <Link to={`/user/${user.id}`}>
            {user.email}
          </Link>
        )}
        {user
          ? logoutButton
          : loginButton}
      </nav>
      <h2>URL Shortener</h2>
      <UrlForm />

      <UrlSearch />
    </div>
  );
}

export default App;
