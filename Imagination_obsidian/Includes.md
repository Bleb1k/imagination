Main inspirators are [[Rust#Includes|rust]] and [[gleam#Includes|gleam]]

`use` can contain `mod` right after it
```rust
use std.prelude.*
use mod term.color.{from_i32, paint_bg}
```

this explicit'ish `mod` keyword allows specifying that this include should look in the same directory as this file

also, it is allowed to separate mod like this
```rust
mod some.directory.with.color

fn main {
	use std.prelude.*
	use color.clear_fg
	println "plain {red}red{clear_fg}"
}

fn red String {
	use color.{from_i32, paint_fg}
	paint_fg from_i32 0xff0000
}
```

this allows to narrow include path and to have scoped `use`'s with less clutter

mod also behaves similar to rust's, where it can define named scopes within the same file, but it will be unlike rust in how keyword itself behaves
exact behaviour is like that: if path supplied leads to existing code, return code that will make existing (found) code available (`use`able) in the current scope,
else return code that expects path and code block in the end

```rust
mod prelude // defined as separate file

mod expected.extension // expected might be a directory with file `extension`, or a file with code identifier `extension`

mod unexpected.item {
	// this is forbidden, leads to error
	// "new namespaces should have path consisting of single identifier"
	// error string is to be improved
}

mod unexpected.{one, two} {
	// this will define functions `one` and `two` of the `thing` scope
	// but scope itself can contain more code
	// this is private/public alternative
}
```

using both `use` and `mod` allowes for easy and fast separation of code without clutter of both file space, and namespace

```rust
use mod term.{color, style, clear} {
	// `color` can't be `use`d in outer scopes if it isn't `use`d in this scope
	use mod color {
		/* some functions and/or structures */
	}
	use mod style {
		/* some functions and/or structures */
	}
	fn clear String {
		"I don't know code for clearing text style/color etc..."
	}
	fn fmt_(thing: String, text: String) String {
		
	}
}

// note that we can't `use` `term` because it is out of scope,
// we need to define it with `mod` first
```

# Detailed explanation
## use
### expects
keyword `mod` or path, where path consists of identifiers separated by period (`.`), and may have `{}` block with list of items to include
### action
includes some code into current scope
### template
```rust
use <path>
use <mod>
```

## mod
### expects
path to existing namespace, or identifier and untyped codeblock
### action
defines namespace in current scope
### template
```rust
mod <valid_path>
mod <identifier> <Code>
```