//STEP 1
function halfNumber(num) {
  var halfNum = num / 2;
  window.console.log("Half of " + num + " is " + halfNum);
  return halfNum;
}

//STEP 2
function squareNumber(num) {
  var squared = num * num;
  window.console.log("The result of squaring " + num + " is " + squared);
  return squared;
}

//STEP 3
function percentOf(num1, num2) {
  var percent = num1/num2*100;
  window.console.log(num1 + " is " + percent + "% of " + num2);
  return percent;
}

//STEP 4
function findModulus(num1, num2) {
  var mod = num2%num1;
  window.console.log(mod + " is the modulus of " + num1 + " and " + num2);
  return mod;
}

//STEP 5
function sumPrompted() {
  var text = window.prompt("Please list numbers, separated by commas");
  nums = text.split(",");
  var sum = 0;
  nums.forEach(element => {
    sum += parseInt(element);
  });
  return sum;
}

// Testing
halfNumber(5);
squareNumber(3);
percentOf(2, 4);
findModulus(4, 10);
window.console.log(sumPrompted());