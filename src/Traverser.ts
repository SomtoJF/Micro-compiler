import { ASTBodyInterface, ASTInterface } from './Types';

type ASTNode = ASTInterface | ASTBodyInterface;
export default function traverser(ast: ASTInterface, visitor: any) {
    function traverseArray(array: ASTBodyInterface[], parent: ASTNode) {
        array.forEach((child) => {
            traverseNode(child, parent);
        });
    }

    function traverseNode(node: ASTNode, parent: ASTNode) {
        // We start by testing for the existence of a method on the visitor with a matching `type`.
        let methods = visitor[node.type];

        if (methods && methods.enter) {
            methods.enter(node, parent);
        }

        switch (node.type) {
            case 'Program':
                traverseArray(node.body, node);
                break;
            case 'CallExpression':
                if ('params' in node) {
                    traverseArray(node.params, node);
                }
                break;
            case 'NumberLiteral':
            case 'StringLiteral':
                break;

            default:
                throw new TypeError(
                    'Micro-compiler cannot access this node type'
                );
        }

        if (methods && methods.exit) {
            methods.exit(node, parent);
        }
    }

    traverseNode(ast, null);
}
