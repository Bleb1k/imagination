## Includes
```rust
import gleam/string
import gleither.{Left, Right, map, get}
```

## Returns
```rust
fn sum_list(list: List(Int), total: Int) -> Int {
  case list {
    [first, ..rest] -> sum_list(rest, total + first)
    [] -> total
  }
}
```

## Pipelines
```rust
import gleam/io
import gleam/string

pub fn main() {
  // Without the pipe operator
  io.debug(string.drop_left(string.drop_right("Hello, Joe!", 1), 7))

  // With the pipe operator
  "Hello, Mike!"
  |> string.drop_right(1)
  |> string.drop_left(7)
  |> io.debug

  // Changing order with function capturing
  "1"
  |> string.append("2")
  |> string.append("3", _)
  |> io.debug
}
```

## Function capturing
```rust
import gleam/io
import gleam/string

pub fn main() {
  // Changing order with function capturing
  "1"
  |> string.append("2")
  |> string.append("3", _)
  |> io.debug
}
```