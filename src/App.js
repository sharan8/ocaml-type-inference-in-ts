import React, { useState } from 'react';
import './App.css';
import { parse } from './parser/parser'
import { run } from './type-inference/types'
import { AstError } from './type-inference/errors'
import JSONPretty from 'react-json-pretty';

function App() {
  const [prog, setProg] = useState('let a = 5 in fun b -> a;;');
  const [output, setOutput] = useState();

  function handleClick() {
    try {
      const parsed = parse(prog)
      console.log(parsed)
      const type = run(parsed)
      setOutput(type)
    } catch (error) {
      if (error instanceof AstError) {
        setOutput(error)
      }
      else {
        throw error
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>OCaml Type Checker</h1>
        <div>
          <label>Input OCaml code here:</label>
          <br />
          <input type="text" name="name" value={prog} onChange={e => setProg(e.target.value)} />
          <button onClick={handleClick}>
            Submit
          </button>
        </div>
        <br />
        <label>Output:</label>
        <div align="left">
          <h5>Expression Type: {output && output.toString()}</h5>
          <JSONPretty id="json-pretty" data={output}></JSONPretty>
        </div>
      </header>
    </div>
  );
}

export default App;
