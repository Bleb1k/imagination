import tokenize, { Tag, type Token } from "./tokenizer.ts";

enum Type {
    block,
    function_declaration,
    basic_token_tree,
}

interface TTItem {
    type: Type;
    value: string;
    start: number;
    end: number;
}

interface StringLiteral extends TTItem {}
interface CodeBlock extends TTItem {}

class TokenTree implements TTItem {
    type: Type;
    leaves: Array<TTItem>;
    value: string;
    constructor() {
        this.type = Type.basic_token_tree;
        this.leaves = [];
        this.value = "TokenTree";
    }
    add(item: TTItem) {
        this.leaves.push(item);
        return item;
    }
    get start(): number {
        return this.leaves.at(0)?.start || NaN;
    }
    get end(): number {
        return this.leaves.at(-1)?.end || NaN;
    }
}

export function parse_string(text: string): TokenTree {
    return parse(tokenize(text));
}

export default function parse(token_list: Iterable<Token>): TokenTree {
    const tree = new TokenTree();
    let current_tree = tree;
    let depth = 0;
    let previous_token: Token = {
        tag: Tag.start,
        loc: { start: 0, end: 0 },
        val: "",
    };
    for (const token of token_list) {
        switch (token.tag) {
            case Tag.invalid:
            case Tag.start:
            case Tag.eof:
                break;
            case Tag.kwd_fn:
            case Tag.kwd_struct:
            case Tag.kwd_impl:
                break;
            case Tag.identifier:
            case Tag.punctuation:
            case Tag.underscore:
            case Tag.pipe:
            case Tag.slash:
            case Tag.backslash:
            case Tag.double_quote:
            case Tag.single_quote:
            case Tag.backtick:
            case Tag.equals:
            case Tag.minus:
            case Tag.plus:
            case Tag.less_than:
            case Tag.greater_than:
            case Tag.exclamation_mark:
            case Tag.question_mark:
            case Tag.comma:
            case Tag.dot:
            case Tag.colon:
            case Tag.semicolon:
            case Tag.left_parenthesis:
            case Tag.right_parenthesis:
            case Tag.left_bracket:
            case Tag.right_bracket:
            case Tag.left_brace:
            case Tag.right_brace:
            case Tag.caret:
            case Tag.tilde:
            case Tag.percent:
            case Tag.ampersand:
            case Tag.dollar_sign:
            case Tag.hash:
            case Tag.at_symbol:
            case Tag.star:
            default:
                break;
        }
        previous_token = token;
        // console.log(`Parsing ${token.type.padEnd(11)} ${token.value}`);
    }
    return tree;
}
