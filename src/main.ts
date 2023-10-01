import tokenize from './Tokenizer';

console.log('compiling...');

const input = '(add 2 (subtract 6 2))';

console.log(tokenize(input));
