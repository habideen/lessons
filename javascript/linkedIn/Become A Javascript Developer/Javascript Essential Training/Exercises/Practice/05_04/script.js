/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

//module to target forms in all backpack
function updateLength(pack, side) {
  const everydayLeftLen = document.querySelector(`#${pack} .${side}length`);
  everydayLeftLen.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputEle = document.querySelector(
      `#${pack} .${side}length input[name='${side}Length']`
    );

    const updateEle = document.querySelector(
      `#${pack} .backpack__features .backpack__strap[data-side='${side}'] span`
    );

    if (inputEle.value != "" && inputEle.value > 0) {
      updateEle.innerHTML = inputEle.value + " inches";
    } else {
      updateEle.innerHTML = "invalid";
    }
    inputEle.value = "";
  });
}

updateLength("pack01", "left");
updateLength("pack01", "right");

updateLength("pack02", "left");
updateLength("pack02", "right");

//update site title
document.querySelector("header .site-title").style.color = "Indigo";
