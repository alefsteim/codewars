import { dirReduc } from "./remove-redundant-directions";

console.log("________");
 console.log(   dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]));
console.log(
  dirReduc([
    "EAST",
    "SOUTH",
    "NORTH",
    "NORTH",
    "NORTH",
    "NORTH",
    "WEST",
    "WEST",
    "SOUTH",
    "EAST",
    "WEST",
    "NORTH",
    "SOUTH",
    "SOUTH",
    "NORTH",
    "WEST",
    "EAST",
    "EAST",
    "EAST",
  ])
);
