/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";

const schoolBackpack = new Backpack(
  "My school backback",
  "45",
  "Red",
  "7",
  14,
  6,
  false
);

console.log("My school backback: ", schoolBackpack);
console.log("Change color: ", schoolBackpack.newColor("Blue"));
console.log("New school backpack: ", schoolBackpack);
