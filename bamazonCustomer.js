var mysql = require('mysql');
var inquirer = require('inquirer');
var table = require('cli-table');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: "productsDB"
});

displayAll ();

function displayAll(){
    connection.query('SELECT * FROM products', function(error, response) {
        if (error) throw error;
        var displayTable = new table({
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock'],
            colWidths: [10,30,18,10,14]
        });
        for (i=0; i < response.length; i++) {
            displayTable.push(
                [response[i].item_id, response[i].product_name, response[i].department_name,
                response[i].price, response[i].stock_quantity]
            );
        }
        console.log(displayTable.toString());
        inquirePurchase();
    });
};
function inquirePurchase(){
    inquirer.prompt([
        {
            name: 'ID',
            type: 'input',
            message: 'What is the item number of the item you would like purchase?'
        }, {
            name: 'Quantity',
            type: 'input',
            message: 'How many would you like to buy?'
        },
    ]).then(function(answers){
        var quantityWanted = answers.Quantity;
        var idWanted = answers.ID;
        purchaseFromDatabase(idWanted, quantityWanted);
    });
};
function purchaseFromDatabase(ID, quantityNeeded) {
    connection.query('SELECT * FROM products WHERE item_id = ' + ID, function(error, response) {
        if (error) throw error;
        if (quantityNeeded <= response[0].stock_quantity) {
            var totalCost = response[0].price * quantityNeeded;
            console.log('We have what you need. Order coming up!');
            console.log('Your total cost for ' + quantityNeeded + ' ' + response[0].product_name +
             ' is ' + totalCost + '. Thank you for your purchase.')
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + quantityNeeded +
            ' WHERE item_id = ' + ID);
        } else {
            console.log("Our apologies. We don't have enough " + response[0].product_name + " to fulfill your order.");
        };
        repeat();
    });
}
function repeat() {
    inquirer.prompt({
      name: "shop",
      type: "list",
      choices: ["Yes", "No"],
      message: "Would you like to continue shopping?"
    }).then(function (answer) {
      if (answer.shop == "Yes") {
        displayAll();
      }
      else {
        console.log('Have a great day!')
        connection.end();
      }
    });
  }