import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { parse } from './parser/parser'

function App() {
  const [prog, setProg] = useState('default');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <label>
            Name:
            <input type="text" name="name" value={prog} onChange={e => setProg(e.target.value)}/>
          </label>
          <button onClick={() => console.log(parse(prog))}>
            Submit 
          </button>
      </div>
      </header>
    </div>
  );
}

export default App;
