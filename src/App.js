import Pokedex from "./Pokedex";
import pokes from "./pokes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokedex pokes={pokes} />
      </header>
    </div>
  );
}

export default App;
