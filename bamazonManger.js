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

inquireUpdates();

function inquireUpdates() {
    inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'Choose an option:',
            choices: ['Review stock', 'Restock Inventory' , 'Add New Product', 'View Low Inventory', 'Remove an Existing Product']
    }]).then(function(answers) {
        switch (answers.action) {
            case 'Review stock':
                displayAll();
                break;
            case 'Restock Inventory':
                restockRequest();
                break;
            case 'Add New Product':
                addRequest();
                break;
            case 'View Low Inventory':
                viewLow();
                break;
            case 'Remove an Existing Product':
                removeRequest();
                break;
        }
    });
};

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
        inquireUpdates();
    });
};
function restockRequest() {
    inquirer.prompt([
        {
            name: 'ID',
            type: 'input',
            message: 'What is the item number of the item you wish to restock?'
        }, {
            name: 'Quantity',
            type: 'input',
            message: 'How many would you like to add?'
        },
    ]).then(function(answers) {
        var quantityAdded = answers.Quantity;
        var IDofProduct = answers.ID;
        restockDatabase(IDofProduct, quantityAdded);
    });
};
    function restockDatabase (id, quant) {
        connection.query ('SELECT * FROM products WHERE item_id = ' + id, function(error, response) {
            if (error) throw error;
            connection.query('UPDATE products SET stock_quantity = stock_quantity + ' + quant + ' WHERE item_id = ' + id);
            inquireUpdates();
        });
    };
function addRequest(){
    inquirer.prompt([
        {
            name: 'Name',
            type: 'input',
            message: 'What is the name of the item you want to restock?'
        }, {
            name: 'Category',
            type: 'input',
            message: 'What is the category for this product?'
        }, {
            name: 'Price',
            type: 'input',
            message: 'How much would you like to sell the item for?'
        }, {
            name: 'Quantity',
            type: 'input',
            message: 'How many would you like to add?'
        },
    ]).then(function(answers){
        var name = answers.Name;
        var category = answers.Category;
        var price = answers.Price;
        var quantity = answers.Quantity;
        buildNewItem(name,category,price,quantity);
    });
};
    function buildNewItem(name,category,price,quantity) {
        connection.query('INSERT INTO Products (product_name,department_name,price,stock_quantity) VALUES("' + name + '","' + category + '",' + price + ',' + quantity +  ')');
        inquireUpdates();
};
function viewLow() {
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function (err, res) {
        if (err) throw err;
        var displayTable = new table({
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock'],
            colWidths: [10,30,18,10,14]
        });
        for (var i = 0; i < res.length; i++) {
          displayTable.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity])
        }
        console.log(displayTable.toString());
        inquireUpdates();
      })
};
function removeRequest(){
    inquirer.prompt([
        {
            name: 'ID',
            type: 'input',
            message: 'What is the item number of the item you wish to remove?'
        }
    ]).then(function(answer){
        var id = answer.ID;
        removeFromDatabase(id);
    });
};
function removeFromDatabase(id){
    connection.query('DELETE FROM products WHERE item_id = ' + id);
    inquireUpdates();
};
