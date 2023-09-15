import { Vector } from "./vector";

const v1 = new Vector([1, 2, 3, 4]);
const v2 = new Vector([10, 20, 30, 40]);
const v3 = new Vector([1, 2, 3, 4]);
const v4 = new Vector([1, 2, 3, 4, 5]);

console.log(v1.add(v2).toString());
console.log(v1.dot(v2));
console.log(v1.norm());
console.log(v1.equals(v3));
