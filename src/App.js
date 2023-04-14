import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isVisible, setIcon] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        {isVisible && (
          <img src={logo} className="App-logo" alt="logo" data-testid="icon" />
        )}
        <button onClick={() => setIcon(!isVisible)}>
          {isVisible ? "Esconder" : "Exibir"}
        </button>
        <p>14/04/23</p>
      </header>
    </div>
  );
}

export default App;
