/*eslint-env browser*/

// STEP 5 (start)
window.addEventListener("load", function () {
//STEP 1
  function part1Message() {
    window.alert("I have been clicked");
  }
  //STEP 2
  document.getElementById("part2Button").onclick = function () {
    window.alert("I have been clicked");
  };
  //STEP 3
  function part3Message() {
    window.alert("I have been clicked");
  }
  document.getElementById("part3Button").addEventListener("click", part3Message);
  //STEP 4
  document.getElementById("part4Button").addEventListener("click", function () {
    window.alert("I have been clicked");
  });
  //STEP 5 (end)
  document.getElementById("part5Button").addEventListener("click", function () {
    window.alert("I have been clicked");
  });
});