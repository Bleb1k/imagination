const std = @import("std");

pub fn main() void {
    // _ = argc;
    // _ = argv;
    const a: i8 = -1;
    std.debug.print("{any}\n", .{a}); // @as(u8, @intCast(a)),
    var args = std.process.args();
    _ = args.skip();
    std.debug.print("cast: {any}\n", .{@as(u8, @intCast(std.fmt.parseInt(i8, args.next().?, 10) catch unreachable))});
}
