import tokenize from './Tokenizer';
import parser from './Parser';

const input = '(add 2 (subtract 6 4))';

function compile(input: string) {
    console.log('compiling...');
    const TOKENS = tokenize(input);
    const AST = parser(TOKENS);
    console.log(AST.body);
}

compile(input);
