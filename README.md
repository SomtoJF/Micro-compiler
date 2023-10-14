
# Table of Contents

1.  [Micro-Compiler](#orgc520ed2)
2.  [Parsing](#org0e128b7)
    1.  [Lexical Analysis (Tokenization)](#orgc54b3f4)
    2.  [Syntatic Analysis (Abstract Syntax Tree)](#orgbf4a8bc)



<a id="orgc520ed2"></a>

# Micro-Compiler

This is a super small compiler built in TypeScript to compile lisp-like function calls to C-like function calls. The compilation process typically involves three steps;

1.  Parsing
2.  Transformation
3.  Code Generation.


<a id="org0e128b7"></a>

# Parsing

This is the first stage of code compilation. It involves representing your code in two different ways which are as **Tokens** and as an **Abstract Syntax Tree (AST)**. These are known as Lexical Analysis and Syntatic Analysis respectively.


<a id="orgc54b3f4"></a>

## Lexical Analysis (Tokenization)

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


<a id="orgbf4a8bc"></a>

## Syntatic Analysis (Abstract Syntax Tree)

During syntatic analysis, the array of tokens are converted into an **Abstract Syntax Tree** which is an object which describes each part of the code (syntax) and their relationship to one another.
The Token:

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

will become:

    // AST
    {
          type: 'Program',
          body: [{
            type: 'CallExpression',
            name: 'add',
            params: [{
              type: 'NumberLiteral',
              value: '2',
            }, {
              type: 'CallExpression',
              name: 'subtract',
              params: [{
                type: 'NumberLiteral',
                value: '4',
              }, {
                type: 'NumberLiteral',
                value: '2',
              }]
            }]
          }]
        }

This will be achieved using Recursion. See the [Parser.ts](./src/Parser.ts) file.

