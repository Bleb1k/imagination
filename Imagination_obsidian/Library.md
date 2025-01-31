This is where all the sessions start, diverge, and processed!

# Semantics

## prefix `#`
#todo
This prefix is borrowed from jai directly, and means that this instruction is built-in^[inspired by zig's `@` prefix]
### comparison:
- Zig uses `@`. 
> Like zig:
> 	- means built-in function/directive
> 	- allow low-level operations
> 	- not necessarily comptime
> 	- #decide_on possible reflection
> 	
> Unlike zig:
> 	- different character (`#`)
> 	- #decide_on does not always comply with type system
- Jai uses `#`.
> Like jai:
> 	- means built-in function/directive
> 	- allow direct manipulation of code on a textual level
# Keywords
## `#use`

This keyword is borrowed from rust, 