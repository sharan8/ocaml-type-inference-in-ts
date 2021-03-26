import React, { useState } from 'react';
import './App.css';
import { parse } from './parser/parser'
import JSONPretty from 'react-json-pretty';

function App() {
  const [prog, setProg] = useState('1 + 1;;');
  const [output, setOutput] = useState();

  function displayOutput(obj_output) {
    console.log(obj_output)
    setOutput(obj_output)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>OCaml Type Checker</h1>
        <div>
          <label>Input OCaml code here:</label>
          <br />
            <input type="text" name="name" value={prog} onChange={e => setProg(e.target.value)}/>
          <button onClick={() => displayOutput(parse(prog))}>
            Submit 
          </button>
      </div>
      <br />
      <label>Output:</label>
      <div align="left">
        <h5>Expression Type: {output && output['expression'] ? output['expression'].__proto__.constructor.name : "Unknown"}</h5>
        <JSONPretty id="json-pretty" data={output}></JSONPretty>
      </div>
      </header>
    </div>
  );
}

export default App;
