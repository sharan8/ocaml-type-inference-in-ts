import React from 'react';
import './App.css';
import { parse } from './parser/parser'
import { inferWithPersistentEnv } from './type-inference/typeInference'
import { AstError } from './type-inference/errors'
import Terminal from 'terminal-in-react';

function App() {
  function handleUserInput(userInput) {
    try {
      const parsed = parse(userInput)
      console.log("Parse output:")
      console.log(parsed)
      const type = inferWithPersistentEnv(parsed)
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
          backgroundColor='black'
          barColor='gray'
          prompt='white'
          color='#89f238'
          outputColor='#89f238'
          style={{ fontWeight: "bold", fontSize: "0.7em" }}
          commands={{
            'ocaml-help': () => {
              window.open('https://ocaml.org/learn/taste.html', "_blank")
              window.focus()
            },
            'github': () => {
              window.open('https://github.com/gb3h/ocaml-type-inference-in-ts', "_blank")
              window.focus()
            },
            'source': () => {
              window.open('https://github.com/gb3h/ocaml-type-inference-in-ts', "_blank")
              window.focus()
            },
            'creators': () => 'Gabriel Yeo and Sharan Thangavel from the National University of Singapore',
            'baby-camels': () => {
              window.open('https://www.youtube.com/watch?v=o3x_b95KspA', "_blank")
              window.focus()
            },
          }}
          descriptions={{
            'ocaml-help': 'open ocaml examples page',
            'github': 'open github repository for this project',
            'source': 'open github repository for this project',
            'creators': 'list names of project creators',
            'baby-camels': 'easter egg :P'
          }}
          commandPassThrough={cmd => {
            const inputString = cmd.join(" ")
            return handleUserInput(inputString)
          }}
          msg='Input an expression in OCaml below. Try `help` or `fun a -> fun b -> fun c -> (a c (b c))`'
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
          <p>Welcome to our OCaml type checker based on {' '}
            <a 
              href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system" 
              target="_blank"
              rel="noreferrer"
              style={{color:"#ff8080"}}>
                Hindley-Milner Type Inference (Algorithm W)
            </a>.
          </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw"
            }}
          >
          <InputTerminal />
        </div>
      </header>
    </div>
  );
}

export default App;
