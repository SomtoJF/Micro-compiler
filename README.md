
# Table of Contents

1.  [Micro-Compiler](#org60e48af)
2.  [Parsing](#org7c9a2ca)
    1.  [Tokenization](#org55e899d)



<a id="org60e48af"></a>

# Micro-Compiler

This is a super small compiler built in TypeScript to compile lisp-like function calls to C-like function calls. The compilation process typically involves three steps;

1.  Parsing
2.  Transformation
3.  Code Generation.


<a id="org7c9a2ca"></a>

# Parsing

This is the first stage of code compilation. It involves representing your code in two different ways which are as **Tokens** and as an **Abstract Syntax Tree (AST)**. These are known as Lexical Analysis and Syntatic Analysis respectively.


<a id="org55e899d"></a>

## Tokenization

According to jamiebuilds, Tokens are an array of tiny little objects that describe an isolated piece of the syntax. They could be numbers, labels, punctuation, operators, whatever.
For the following syntax:

    ;; lisp
    (add 2 (subtract 4 2))

Tokens might look something like this:

    // Tokens
    [
          { type: 'paren',  value: '('        },
          { type: 'name',   value: 'add'      },
          { type: 'number', value: '2'        },
          { type: 'paren',  value: '('        },
          { type: 'name',   value: 'subtract' },
          { type: 'number', value: '4'        },
          { type: 'number', value: '2'        },
          { type: 'paren',  value: ')'        },
          { type: 'paren',  value: ')'        },
        ]

This is done by a function called a tokenizer or lexer which

1.  Takes in the function call as a string
2.  Loops the string and pushes characters, values, operators, et.c to a `tokens` array.
3.  Returns the array of tokens.

