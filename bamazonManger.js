var mysql = require('mysql');
var inquirer = require('inquirer');
var table = require('cli-table');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: "productsDB"
});

function displayAll(){
    connection.query('SELECT * FROM prodcuts', function(error, response) {
        if (error) throw error;
        var displayTable = new table({
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock'],
            colWidths: [10,30,18,10,14]
        });
        for (i=0; i < response.length; i++) {
            displayTable.push(
                [response[i].item_id, response.[i].prodcut_name, response[i].department_name,
                response[i].price, response[i].stock_quantity]
            );
        }
        console.log(displayTable.toString());
        inquireUpdates();
    });
};
function inquireUpdates() {
    inquireUpdates.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'Choose an option:',
            choices: ['Restock Inventory' , 'Add New Product', 'Remove an Existing Product']
    }]).then(function(answers) {
        switch (answers.action) {
            case 'Restock Inventory':
                restockRequest();
                break;
            case 'Add New Product':
                addRequest();
                break;
            case 'Remove an Existing Product':
                removeRequest();
                break;
        }
    });
};