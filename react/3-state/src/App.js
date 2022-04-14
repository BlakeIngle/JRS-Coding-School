import logo from './logo.svg';
import './App.css';
import MyBadComponent from './components/bad/MyBadComponent';
import ClickCounter from './components/stateful/ClickCounter';
import TwoWayCounter from './components/stateful/TwoWayCounter';
import BooleanState from './components/stateful/BooleanState';
import StringState from './components/stateful/StringState';
import ArrayState from './components/arrays-and-objects/ArrayState';
import ObjectState from './components/arrays-and-objects/ObjectState';
import ParentSmart from './components/parent-child/ParentSmart';

function App() {
  return (
    <div className="App">
      <ArrayState />
      <ObjectState />

      <MyBadComponent />
      <ClickCounter />
      <TwoWayCounter />
      <BooleanState />
      <StringState />

      <ParentSmart />

    </div>
  );
}

export default App;
