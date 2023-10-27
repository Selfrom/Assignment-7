/*eslint-env browser*/
function displayMenu() {
  "use strict";
  console.log("Welcome to the Product Inventory Management System");
  console.log("");
  console.log("COMMAND MENU");
  console.log("show - show inventory");
  console.log("update - update quantity of an item");
  console.log("exit - exit the program");
  console.log("");
}

function showInventory(inventory) {
  "use strict";
  inventory.sort().forEach(item => {
    console.log(item[0] + " " + item[1] + "(" + item[2]+") $" + item[3]);
  });
}

function updateItem(inventory) {
  "use strict";
  var skuList = [];
  var sku, quantity;
  inventory.forEach((item) => skuList.push(item[0]));
  do {
    sku = parseInt(window.prompt("Please enter the sku number to update"));
    if (skuList.includes(sku)) {
      do {
        quantity = parseInt(window.prompt("Please enter a quantity"));
        if(isFinite(quantity)) {
          inventory[skuList.indexOf(sku)][2] = quantity;
          return;
        }
      } while(quantity == NaN)
    }
    else {
      window.alert("Could not find an item with that sku");
    }
  } while(sku == NaN)
}


function main() {
  "use strict";
  var inventory = [];
  inventory[0] = [4824, "Shirt", 10, 15.99];
  inventory[1] = [6343, "Jeans", 22, 39.99];
  inventory[2] = [3223, "Socks", 36, 9.99];
  inventory[3] = [2233, "Hat", 12, 14.99];
  inventory[4] = [9382, "Jacket", 5, 49.99];

  displayMenu();

  var command;

  while (true) {
    command = window.prompt("Enter command");
    if (command != null) {
      if(command === "show") {
        showInventory(inventory);
      }
      else if (command === "update") {
        updateItem(inventory);
      }
      else if (command === "exit") {
        break;
      }
      else {
        window.alert("Invalid command");
      }
    }
    else {
      break;
    }
  }
}
main();