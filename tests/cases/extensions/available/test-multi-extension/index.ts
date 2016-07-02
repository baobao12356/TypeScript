import {SyntacticLintWalker, SemanticLintWalker} from "extension-api";

export class IsNamedFoo extends SyntacticLintWalker {
    constructor(state) { super(state); }
    visit(node, stop, error) {
        if (node.kind === this.ts.SyntaxKind.Identifier) {
            if (node.text.toLowerCase() === "foo") {
                error("Identifier 'foo' is forbidden.", node);
            }
        }
    }
}

export class IsNamedBar extends SyntacticLintWalker {
    constructor(state) { super(state); }
    visit(node, stop, error) {
        if (node.kind === this.ts.SyntaxKind.Identifier) {
            if (node.text.toLowerCase() === "bar") {
                error("Identifier 'bar' is forbidden.", node);
            }
        }
    }
}

export class IsValueFoo extends SemanticLintWalker {
    constructor(state) { super(state); }
    visit(node, stop, error) {
        const type = this.checker.getTypeAtLocation(node);
        if (type.flags & this.ts.TypeFlags.StringLiteral) {
            if (node.text === "foo") {
                error("String literal type 'foo' is forbidden.", node);
            }
        }
    }
}

export class IsValueBar extends SemanticLintWalker {
    constructor(state) { super(state); }
    visit(node, stop, error) {
        const type = this.checker.getTypeAtLocation(node);
        if (type.flags & this.ts.TypeFlags.StringLiteral) {
            if (node.text === "bar") {
                error("String literal type 'bar' is forbidden.", node);
            }
        }
    }
}