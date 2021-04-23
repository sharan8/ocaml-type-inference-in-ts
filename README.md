# TSTI-OCaml: Type Inference for OCaml in TypeScript

The overall objective of this project is to implement static type inference for OCaml in TypeScript. Specifically, it implements the [Hindley-Milner Type System](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system)'s Algorithm W. It also includes an REPL-like frontend that takes in user input line by line. The following types of expressions are currently supported:
1. Constants
2. Binary operations
3. Conditional statements
4. For and While loops
5. Function definitions
6. Function application
7. Scoped let expressions
8. Global let expressions (not limited to a scope)

To try a live version of our project, go to: https://tinyurl.com/ocamltypechecker, https://silly-perlman-3784e5.netlify.app/

## Guide to Repository
### antlr4ts
Code related to the use of antlr4ts can be found in [src/lang](src/lang). This includes the following:
- [Ocaml.g4](src/lang/Ocaml.g4) for grammar specification
- antlr4ts-generated lexer, parser, listener, and visitor files

### Parser
- [src/parser](src/parser) includes our main parse() method and the overridden visitor methods for each expression supported

### Type Inference
The crux of the type inference mechanism can be found in [src/type-inference](src/type-inference). This includes the following:
- [nodes.ts](src/type-inference/nodes.ts), which includes our custom ASTNodes
- [typeInference.ts](src/type-inference/typeInference.ts), which includes the core of our type inference algorithm
- [types.ts](src/type-inference/types.ts), which includes the TypeVariable and TypeOperator definitions
- [errors.ts](src/type-inference/errors.ts), which includes the errors that we currently support

### Frontend UI
- The crux of our frontend UI can be found in [src/App.js](src/App.js)

## Installation

1. Clone this repository locally
2. Run `yarn install` in the root of the repository
3. Run `yarn start` in the root of the repository
4. Open the local address pointed to in your browser

## How you can contribute

If you would like to expand the current supported sublanguage of OCaml: 
1. Have a look at the OCaml Chapter 1 BNF in [`/src/lang/Ocaml.g4`](src/lang/Ocaml.g4)
2. To update the BNF, add to it and run `yarn antlr4ts` to generate the new visitor, listener and parser files. 
3. The visitors or listeners can then be overridden to suit your intended parse outcomes. This can be observed in [`src/parser/parser.ts`](src/parser/parser.ts)
4. Create new nodes as necessary in [`src/type-inference/nodes.ts`](src/type-inference/nodes.ts)
5. Handle these new nodes in the core of the type inference algorithm in the `infer()` method at [`src/type-inference/typeInference.ts`](src/type-inference/typeInference.ts)

## References

- Principal type-schemes for functional programs (Damas, Milner): http://steshaw.org/hm/milner-damas.pdf
- Ian Grant 2011 on HM: https://steshaw.org/hm/hindley-milner.pdf
- Hindley Milner in Haskell: https://github.com/kritzcreek/fby19
- Hindley Milner implementation in Python: https://github.com/rob-smallshire/hindley-milner-python/blob/master/inference.py
- Above adapted to TypeScript: https://gist.github.com/oxyflour/f98432aa400daa225d04
