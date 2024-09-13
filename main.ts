// import tokenize from "js-tokens"
// import parse from "./parser.ts";
import tokenize from "./tokenizer.ts";

// const imagination = Deno.readTextFileSync("./imagination.pug")

// const a = tokenize(imagination.toString())

console.time();
[...tokenize(`
fn alias(keyword_a: Identifier, keyword_b: Identifier) Code {
    struct keyword_a { keyword_b }
    impl Deref for keyword_a {
        let Target = keyword_b
        fn deref(self: &Self) &Self.Target { self.0 }
    }
}
`)];
console.timeEnd();
// for (const tok of a) {
//     console.log(tok);
// }
