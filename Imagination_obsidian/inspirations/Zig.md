# Types
types in zig are read from left to right
i've borrowed an example of this [there](https://nathancraddock.com/blog/consistency-in-zigs-type-system/)
```zig
var to_make_a_point: ?*[]?std.ArrayList(u8) = undefined;
```
and this reads as
optional pointer to slice of optional ArrayLists of u8