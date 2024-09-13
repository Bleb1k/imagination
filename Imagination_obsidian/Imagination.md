This language is inspired by many languages such as:
- [Rust](inspirations/Rust)
- Zig
- TypeScript
- Gleam (double names as a parameter name and returns)
- etc...

For highlight use `pug` or `haxe` for now


# #1 anonymous what?
I had an idea that came from JS's anonymous function `() => {}`, and zig's anonymous structure `.{}`, i wonder what else can be anonymous...
What this means is that i want to be able to create both anonymous functions and anonymous structures, and maybe something else, but this not urgent, and most possibly redundant
> [!Note]
> I don't really have to do this, but if it is possible, this would be great!

# #2 compiled or interpreted?
I want this language to be compiled, but simultaneously, to have capabilities of interpreted language
I think this is super hard challenge for me alone
Buuuut... what i think about this is:
It would be nice to be able to inject needed parts of interpreter into generated executable
It also would be nice, if this executable then dispatched all those parts into centralized storage and left behind a raw executable of the program itself
There should be options, for parts of interpreter to run directly from within executable or to be dispatched on first run (i want this to be default)
dev experience wouldn't suffer, because on installation, interpreter gets installed too
so, on `run` the program just runs, with most (if not all) code of the program getting compiled beforehand, with visible statistic of how much of program got compiled, and how much is left for the interpreter
> [!Question]
> I wonder if reflection is possible without interpreter...
> ...maybe with dynamic libraries... 
> ...or something else...

# #3 FP or managing scopes efficiently
In gleam there's ![[Gleam#Function capturing|function capturing]]
and it all would be nice and dandy, if it would not be possible to carry those captured functions out of scope, but with gleam this is possible! I want to know how!
I know that gleam operates on JS/BEAM, and their VM's allows that, but I wonder if it is possible to omit a need for vm for this case... and at what cost...

What i really want with this, is to create partially filled functions, structure of my language already allows this, so i'll try, but I don't know if this is what i need or not...

```rust
use std.prelude.*

fn main {
	let add_1 = gen_add 1
	let add_10 = get_add 10
	println add_10 add_1 9 // should print 20
}

fn add(a: i32, b: i32) i32 {
	a + b
}

fn gen_add(a: i32) fn(i32) i32 {
	add __ a
	/* 
	fn(temp_123: i32) i32 {
		add temp_123 a
	}
	*/
}
```
