// most of the code relies on https://github.com/ziglang/zig/blob/master/lib/std/zig/tokenizer.zig
// utf8 support relies on

export type Token = {
    tag: Tag;
    loc: Loc;
    val: string;
};

type Loc = { start: number; end: number };
const loc = (start: number, end: number) => ({ start, end });

export enum Tag {
    invalid,
    start,
    eof,
    kwd_fn,
    kwd_struct,
    kwd_impl,
    // temp
    identifier,
    // temp
    punctuation,
    underscore, // _
    pipe, // |
    slash, // /
    backslash, // \
    double_quote, // "
    single_quote, // '
    backtick, // `
    equals, // =
    minus, // -
    plus, // +
    less_than, // <
    greater_than, // >
    exclamation_mark, //!
    question_mark, //?
    comma, //,
    dot, //.
    colon, // :
    semicolon, // ;
    left_parenthesis, // (
    right_parenthesis, // )
    left_bracket, // [
    right_bracket, // ]
    left_brace, // {
    right_brace, // }
    caret, // ^
    tilde, // ~
    percent, // %
    ampersand, // &
    dollar_sign, // $
    hash, // #
    at_symbol, // @
    star, // *
}

enum Keywords {
    "fn" = Tag.kwd_fn,
    "struct" = Tag.kwd_struct,
    "impl" = Tag.kwd_impl,
}

enum Punctuation {
    "_" = Tag.underscore,
    "|" = Tag.pipe,
    "/" = Tag.slash,
    "\\" = Tag.backslash,
    '"' = Tag.double_quote,
    "'" = Tag.single_quote,
    "`" = Tag.backtick,
    "=" = Tag.equals,
    "-" = Tag.minus,
    "+" = Tag.plus,
    "<" = Tag.less_than,
    ">" = Tag.greater_than,
    "!" = Tag.exclamation_mark,
    "?" = Tag.question_mark,
    "," = Tag.comma,
    "." = Tag.dot,
    ":" = Tag.colon,
    ";" = Tag.semicolon,
    "(" = Tag.left_parenthesis,
    ")" = Tag.right_parenthesis,
    "[" = Tag.left_bracket,
    "]" = Tag.right_bracket,
    "{" = Tag.left_brace,
    "}" = Tag.right_brace,
    "^" = Tag.caret,
    "~" = Tag.tilde,
    "%" = Tag.percent,
    "&" = Tag.ampersand,
    "$" = Tag.dollar_sign,
    "#" = Tag.hash,
    "@" = Tag.at_symbol,
    "*" = Tag.star,
}

/** https://regex101.com/r/3va4UW/3 */
const Tokenizer = new RegExp(
    `(?<Keyword>${
        Object.keys(Keywords)
            .filter((v) => isNaN(v as unknown as number))
            .join("|")
    })|(?<Identifier>(?:\\p{M}*[\\p{L}\\p{N}\\p{So}]+\\p{M}*)+)|(?<Punctuation>[\\p{P}\\p{S}])`,
    "gud",
);

console.log(Tokenizer);

type State =
    | "Start"
    | "Invalid";

export default function* initTokenizer(text: string): Iterable<Token> {
    let match: RegExpExecArray | null;

    while ((match = Tokenizer.exec(text))) {
        if (!match.indices) throw new Error("The regex must have `d` flag");
        if (!match.groups) {
            throw new Error(
                "Entries are not grouped into <Keyword>, <Identifier>, <Punctuation>",
            );
        }

        const [token_group, val] = Object.entries(match.groups).filter((
            [_, v],
        ) => v !== undefined)[0];

        switch (token_group) {
            case "Keyword":
                yield {
                    /// @ts-ignore: enum indexing with non-number type
                    tag: Keywords[val],
                    loc: loc(...match.indices[0]),
                    val,
                };
                break;
            case "Identifier":
                yield {
                    tag: Tag.identifier,
                    loc: loc(...match.indices[0]),
                    val,
                };
                break;
            case "Punctuation":
                yield {
                    tag: val in Punctuation
                        /// @ts-ignore: enum indexing with non-number type
                        ? Punctuation[val]
                        : Tag.punctuation,
                    loc: loc(...match.indices[0]),
                    val,
                };
                break;

            default:
                yield {
                    tag: Tag.invalid,
                    loc: loc(...match.indices[0]),
                    val,
                };
                break;
        }
        // console.log(Tokenizer, "\n");
    }
    return void 0;
}
