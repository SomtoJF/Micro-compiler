interface TokenInterface {
    type: 'number' | 'paren' | 'string' | 'name';
    value: string;
}

type tokenizerReturnType = TokenInterface[];
type ASTNodeTypes = 'NumberLiteral' | 'StringLiteral' | 'CallExpression';

interface ASTBodyInterface {
    type: ASTNodeTypes;
    name?: string;
    value?: string;
    params?: ASTBodyInterface[];
}

interface ASTInterface {
    type: 'Program' | ASTNodeTypes;
    body: ASTBodyInterface[];
}

export { tokenizerReturnType, ASTInterface };
