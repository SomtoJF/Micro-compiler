interface TokenInterface {
    type: string;
    value: string;
}

type tokenizerReturnType = TokenInterface[];

interface ASTBodyInterface {
    type: string;
    name?: string;
    value?: string;
    params?: ASTBodyInterface[];
}

interface ASTInterface {
    type: string;
    body: ASTBodyInterface[];
}

export { tokenizerReturnType, ASTInterface };
