Unlike JavaScript, this language have predefined style rules
# General
## inspirators
- Rust
- Gleam
- C
## namespaces
- namespaces are either a code contained within each file or a code block defined with keyword `mod`
- each namespace separates code by sections
- namespaces may not be extended
## files
- files are a part of code structure
- file names are identifiers
- files are namespaces
## lines
- no hard limit on length
- soft limit 120 characters
- no trailing whitespaces
## indenting
- 2 character long tabs
## sections
- sections separated from each other with 2 newlines
- if one of neighbouring sections only have one item, separate them by single newline
- sections have order: `use`, `mod`, `use mod`, `struct|impl`, `fn`
- `use`
	- items ordered in longest to shorters then alphabetically
	- no newlines between each statement
- `mod`
	- items have manual order control
	- separation of items by 1 newline
- `use mod`
	- same as `mod`
- `struct|impl`
	- same as `mod`
- `fn`
	- same as `mod`
# calling
- functions may return, cause side-effect, or both(undesirable)
- function call should be performed without parenthesis (will be interpreted as tuple)
- function call may be interpreted with tuple
- parameter must be supplied
# Naming
Most of naming style is inspired by Rust and Zig
## shared
- most symbols in utf8 are allowed
- may not start with numbers
- identifiers may not be redefined
exceptions will be explicitly stated
## functions (excluding `Type` and `Code`)
- snake_case
## functions (only `Type`)
- PascalCase
## functions (only `Code`)
- snake_case? or PascalCase?
## identifiers
- snake_case
