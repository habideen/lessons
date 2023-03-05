/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  lidOpen: true,
  strapLength: {
    left: 26,
    right: 26,
  },
  newName: function (name) {
    this.name = name;
    console.info("Name changed to ", name);
  },
  newVolume: function (volume) {
    this.volume = volume;
    console.info("Volume changed to ", volume);
  },
  newColor: function (color) {
    this.color = color;
    console.info("Color changed to ", color);
  },
  newPocketNum: function (pocketNum) {
    this.pocketNum = pocketNum;
    console.info("Pocket number changed to ", pocketNum);
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    console.info("Lid status changed to ", lidStatus);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log(backpack);

backpack.toggleLid(false);
console.log(backpack);

backpack.newName("Miky Mouse");
console.log(backpack);

backpack.newPocketNum(23);
console.log(backpack);

backpack.newColor("Red");
console.log(backpack);

backpack.newVolume(19);
console.log(backpack);

backpack.newStrapLength(32, 17);
console.log(backpack);
