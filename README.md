# TSTI-OCaml: Type Inference for OCaml in TypeScript

To start, run: `yarn install` and then `yarn start`.

The OCaml Chapter 1 BNF is in `/src/lang/Ocaml.g4`. If you would like to update the BNF, add to it and run `yarn antlr4ts` to generate the new visitor and parser.

References:

Principal type-schemes for functional programs (Damas, Milner): http://steshaw.org/hm/milner-damas.pdf

Hindley Milner in Haskell: https://github.com/kritzcreek/fby19

Hindley Milner implementation in Python: https://github.com/rob-smallshire/hindley-milner-python/blob/master/inference.py

Above adapted to TypeScript: https://gist.github.com/oxyflour/f98432aa400daa225d04
