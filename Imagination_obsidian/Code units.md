index of terms and what do they mean

## [[Includes|Include]]

to include means to give current scope means to access code defined in this
namespace

## Block

block is a section of code enclosed by braces `{}`

## Scope

scope refers to code block and all blocks up-to and including current namespace

```rust
use std.prelude.*
use std.rng

fn main {
	let num = (10).*
	let add = fn(i32, i32) i32 {
		fn foo(a: i32, b: i32) i32 {
			a + num
			// here num transfers (or moves, as in Rust) inside a scope of the block of this function
		}
		fn bar(a: i32, b: i32) i32 {
			foo a b
			// if num were to be included into this scope, error would happen
		}
		*bar
	}
	// `foo` and `bar` is unaccessable
}
```

## Keyword

anything that describes predefined language elements

- let
- fn
-

etc...

## Type

type is a value too in this language, like in [[Zig|zig]]
