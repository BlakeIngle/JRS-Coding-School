import "./App.css";
import FavoritesBox from "./components/favoritesBox";
import Item from "./components/Item";
import Movies from "./components/movies/movies";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <h1>Blake's Webpage</h1>

      <FavoritesBox
        title="Favorite Food"
        list={["Hamburgers", "Chick-Fil-A", "Weinerschnitzel"]}
      />

      <FavoritesBox
        title="Favorite Movies"
        list={[
          "Princess Mononoke",
          "Blade Runner 2049",
          "The Boondock Saints",
          "Django: Unchained",
          "The Incredibles",
          "Pain And Gain"
        ]}
      />

      <FavoritesBox
        title="Favorite Quotes"
        list={[
          '"Cocky Little Freaks!" - Train Conductor, Star Fox 64 (1996)',
          `"I'm going to show you how to kill a god." - Lady Eboshi, Princess Mononoke 1997`,
          `"That's blood baby" - hooker, Grand Theft Mario, Robot Chicken`,
          '"Destroy us all. Destroy us all. Destroy us all." - Billy, Bill & Mandy',
        ]}
      />

      <ol>
        <Item itemName="Eggs" quantity="12" />
        <Item itemName="1lb Ground Beef" quantity="1" />
        <Item itemName="Bread Crumbs" quantity="1" />
        <Item itemName="Tomato Paste" quantity="1" />
        <Item itemName="white onion" quantity="1" />
        <Item itemName="milk" quantity="1" />
        <Item itemName="carrots" quantity="2" />
        <Item itemName="celery" quantity="2" />
        <Item itemName="honey" quantity="1" />
        <Item itemName="brown sugar" quantity="1" />
        <Item itemName="vinegar" quantity="1" />
      </ol>

      <Movies />
    </div>
  );
}

export default App;
