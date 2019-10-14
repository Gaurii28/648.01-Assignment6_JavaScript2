/*eslint-env browser*/
var inventory;

function display_Menu() {
    "use strict";
    window.console.log("Welcome to the Inventory Managemet Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update an existing product's inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function display_Product(inventory) {
    "use strict";
    for (var i = 0; i < inventory.length; i++) {
        window.console.log(inventory[i][0] + " " + inventory[i][1] + " (" + inventory[i][2] + ") $" + inventory[i][3]);
    }
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var number = window.prompt("Enter a sku number!!");
    var stock = window.prompt("Enter a stock quantity!!");
    for (var i = 0; i <= inventory.length; i++) {
        if (inventory[i][0] === number) {
            inventory[i][2] = stock;
            break;
        }
    }
}

function main() {
    "use strict";
    inventory = [[4824, "Shirt", 10, 15.99], [6343, "Jeans", 22, 39.99], [3223, "Socks", 36, 9.99], [2233, "Hat", 12, 14.99], [9382, "Jacket", 5, 49.99]];
    display_Menu();
    while (true) {
        var command = window.prompt("Enter Command!!!")
    if(command !== null){
        if (command == "view") {
            display_Product(inventory);
        } else if (command == "update") {
            update(inventory);
        } else if (command == "exit") {
            break;
        } else {
            window.alert("Invalid command!!!");
        }
    }else {
        break;
    }
        
    }
    window.console.log("Terminated!!!");
}

main();