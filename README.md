
# Table of Contents

1.  [Micro-Compiler](#orga3b407c)
2.  [Parsing](#org40ddbb4)
    1.  [Lexical Analysis (Tokenization)](#org089122e)



<a id="orga3b407c"></a>

# Micro-Compiler

This is a super small compiler built in TypeScript to compile lisp-like function calls to C-like function calls. The compilation process typically involves three steps;

1.  Parsing
2.  Transformation
3.  Code Generation.


<a id="org40ddbb4"></a>

# Parsing

This is the first stage of code compilation. It involves representing your code in two different ways which are as **Tokens** and as an **Abstract Syntax Tree (AST)**. These are known as Lexical Analysis and Syntatic Analysis respectively.


<a id="org089122e"></a>

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

