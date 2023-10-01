import { tokenizerReturnType, ASTInterface } from './Types';

function parser(tokens: tokenizerReturnType): ASTInterface {
    let current = 0;

    const walk = () => {
        let token = tokens[current];

        if (token.type === 'number') {
            current++;
            return {
                type: 'NumberLiteral',
                value: token.value,
            };
        }

        if (token.type === 'string') {
            current++;
            return {
                type: 'StringLiteral',
                value: token.value,
            };
        }

        if (token.type === 'paren' && token.value === '(') {
            // Increment 'current' to get the name of the CallExpression
            token = tokens[++current];

            let node: any = {
                type: 'CallExpression',
                name: token.value,
                params: [],
            };

            // Increment token again to get the first paramater of the call expression
            token = tokens[++current];
            while (
                token.type !== 'paren' ||
                (token.type === 'paren' && token.value !== ')')
            ) {
                // we'll call the `walk` function which will return a `node` and we'll
                // push it into our `node.params`.
                node.params.push(walk());
                token = tokens[current];
            }

            current++;
            return node;
        }

        throw new TypeError(token.type);
    };

    let ast: ASTInterface = {
        type: 'Program',
        body: [],
    };

    while (current < tokens.length) {
        ast.body.push(walk());
    }

    return ast;
}

export default parser;
