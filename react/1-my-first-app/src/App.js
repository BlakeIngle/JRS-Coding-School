import logo from './logo.svg';
import './App.css';
import FavoriteList from './components/FavoriteList';
import ToDoListItem from './components/ToDoListItem';
import ToDoList from './components/ToDoList';
import ShoppingList from './components/ShoppingList';
import BirthdayList from './components/BirthdayList';

function App() {

  let json = {
    people: [
      {
        name: 'Blake',
        birthday: 'September 20 1996',
        favoriteColor: 'purple'
      },
      {
        name: 'Nick',
        birthday: 'December 20 1986',
        favoriteColor: 'green'
      },
      {
        name: 'Kristina',
        birthday: 'December 22 1992',
        favoriteColor: 'blue'
      },
      {
        name: 'Chris',
        birthday: 'December 23 1969',
        favoriteColor: 'green'
      },
      {
        name: 'Jacob',
        birthday: 'May 17 1990',
        favoriteColor: 'black'
      },
    ]
  }

  let list2 = [
    'Almond Milk',
    'Bread',
    'Eggs',
    'Coffee',
    'Paper Towels',
    'Beer',
    'Dog Food'
  ];

  let list1 = [
    'Diapers',
    'Baby Food',
    'Cheese',
    'Bananas'
  ];

  return (
    <div className="App">

      <BirthdayList people={json.people} />

      <ShoppingList myItems={list1} />
      <ShoppingList myItems={list2} />

    </div>
  );
}

export default App;