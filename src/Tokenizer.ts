import { tokenizerReturnType, TokenInterface } from './Types';

function tokenizer(input: string): tokenizerReturnType {
    let tokens: tokenizerReturnType = [];

    for (let current = 0; current < input.length; current++) {
        let char = input.charAt(current);

        if (char === '(') {
            tokens.push({ type: 'paren', value: '(' });
            continue;
        }

        if (char === ')') {
            tokens.push({ type: 'paren', value: ')' });
            continue;
        }

        let WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            continue;
        }

        let NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {
            let value = '';
            /*
             * Loop through each character in the sequence until we encounter a character that
             * is not a number, pushing each charater that is a number to our value and incrementing
             * `current` as we go
             */
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }

            // After that we push our `number` token to the `tokens` array.
            tokens.push({ type: 'number', value });

            // And we continue on.
            // current is the char after the number so we need to decrement it so that char gets tokenized
            --current;
            continue;
        }

        // We'll also add support for strings in our language which will be any
        // text surrounded by double quotes (").
        //
        //   (concat "foo" "bar")
        //            ^^^   ^^^ string tokens
        //
        // We'll start by checking for the opening quote:

        if (char === '"') {
            let value = '';

            char = input[++current];

            while (char !== '"') {
                value += char;
                char = input[++current];
            }

            tokens.push({ type: 'string', value });
            continue;
        }

        const LETTERS = /[a-z]/i;
        if (LETTERS.test(char)) {
            let value = '';
            while (LETTERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({ type: 'name', value });
        }
    }
    return tokens;
}

export default tokenizer;
