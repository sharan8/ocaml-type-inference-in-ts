import React from 'react';
import './App.css';
import { parse } from './parser/parser'
import { run } from './type-inference/typeInference'
import { AstError } from './type-inference/errors'
import Terminal from 'terminal-in-react';

function App() {
  function handleUserInput(userInput) {
    try {
      const parsed = parse(userInput)
      console.log("Parse output:")
      console.log(parsed)
      const type = run(parsed)
      return type.toString()
    } catch (error) {
      if (error instanceof AstError) {
        return error.toString()
      } else {
        throw error
      }
    }
    
  }

  const InputTerminal = () => {
    return (<Terminal
          color='#89f238'
          backgroundColor='black'
          barColor='gray'
          prompt='white'
          style={{ fontWeight: "bold", fontSize: "0.7em" }}
          commands={{
            'ocaml-help': () => {
              window.open('https://ocaml.org/learn/taste.html', "_blank")
              window.focus()
            },
            'baby-camels': () => {
              window.open('https://www.youtube.com/watch?v=o3x_b95KspA', "_blank")
              window.focus()
            }
          }}
          descriptions={{
            'ocaml-help': 'open ocaml examples page',
            'baby-camels': 'easter egg :P'
          }}
          commandPassThrough={cmd => handleUserInput(cmd.join())}
          msg='Input any expression in OCaml below. For help with OCaml, try `ocaml-help`.'
        />)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            width: "75%"
          }}
        >
          <h1>OCaml Type Checker</h1>
          <p>Hello there! Welcome to our OCaml type checker based on {' '}
            <a 
              href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system" 
              target="_blank"
              style={{color:"#ff8080"}}>
                Hindley-Milner Type Inference (Algorithm W)
            </a>.
          </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
          <InputTerminal />
        </div>
      </header>
    </div>
  );
}

export default App;
