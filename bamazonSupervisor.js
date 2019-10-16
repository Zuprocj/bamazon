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

function displayAll(){
    connection.query('SELECT * FROM products', function(error, response) {
        if (error) throw error;
        var displayTable = new table({
            head: ['Depart ID', 'Dept Name', 'Overhead', 'Prodcut Sales', 'Profit'],
            colWidths: [20,40,15,15,15]
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