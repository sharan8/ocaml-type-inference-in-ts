import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { parse } from './parser/parser'
import { run } from './type-inference/types'

function App() {
  const [prog, setProg] = useState('default');

  function handleClick() {
    const parsed = parse(prog)
    console.log(parsed)
    const type = run(parsed)
    console.log(type)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <label>
            Name:
            <input type="text" name="name" value={prog} onChange={e => setProg(e.target.value)}/>
          </label>
          <button onClick={handleClick}>
            Submit 
          </button>
      </div>
      </header>
    </div>
  );
}

export default App;
