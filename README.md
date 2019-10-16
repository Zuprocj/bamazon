# Bamazon

This app is an  Amazon-like storefront using MySQL and Node.js. The bamazonCustomer.js app takes in orders from customers and deplete stock from the store's inventory. The bamazonManager.js restocks inventory, add new products and removes products from the database.


**Before you begin, make sure you have these node packages installed**

1. **mysql** This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.
_'npm install mysql'_
2. **inquirer** Inquirer.js strives to be an easily embeddable and beautiful command line interface for Node.js 
_'npm install inquirer'_
3. **cli-table** This utility allows you to render unicode-aided tables on the command line from your node.js scripts.
_'npm install cli-table'_


# bamazonCustomer.js
## Functions

**displayAll();**

Displays a table for the user and then prompts the user what item number would the user would like to purchase.
![image of customer](https://user-images.githubusercontent.com/50551420/66898482-22e08c00-efae-11e9-84c1-dd7369a42627.png)
_inital database in a table displayed_

**inquirePurchase()**

Inquirer prompt that takes in the item number that the user wants to purchase and quantity that user would like to purchase.
![image of customerpurchaseandrepeat](https://user-images.githubusercontent.com/50551420/66899308-91721980-efaf-11e9-950d-4b9231516583.png)
_purchase item id 1 with a quantity of 200.  Informs the user how much they spent and table is updated._

**purchaseFromDatabase();**

Function that takes the user input and subtract quantity wanted from the total. If the user requests more than total then an error message is displayed.
Error message
![image of error](https://user-images.githubusercontent.com/50551420/66898644-6d620880-efae-11e9-9cc4-8b2cf431036b.png)
_error message shown_

**repeat();**

Inquirer prompt asking if the user would like to continue shopping.  If yes the app goes to the inquirePurchase function. If no then connection ends with message.

# bamazonManager.js
## Functions

**inquireUpdates()**

Inquire prompt that user selects between actions.  The actions are review stock, restock inventroy, add new product, view low inventory, and remove an existing product.
![image of manager](https://user-images.githubusercontent.com/50551420/66899412-bebec780-efaf-11e9-84cd-d0981faac804.png)
_manager menu shown_

**displayAll();**

Displays a table of the database for the user and then prompts the user if they would like to continue to manage store.
![image of manager](https://user-images.githubusercontent.com/50551420/66899747-52909380-efb0-11e9-995d-61307ef58c2e.png)
_current database table shown_

**restockRequest()**

Function that restocks item within the database.  Asks for item to be restocked my prompting the item id desired. And prompts how many if said item to be added to the database.

**restockDatabase**

Function that takes the item id and quantity from restcokRequest function and updates it the database.
![image of restock](.https://user-images.githubusercontent.com/50551420/66899618-26751280-efb0-11e9-81ec-4940e68f40f4.png)
_restock of database of item 1 from 12 to 212_

**addRequest()**

Function that adds a new item to the database. Prompts the user with name of item, category of item, selling price, and quantity..

**buildNewItem(name,category,price,quantity)**

Function that handles the answers from the addRequest function and inputs them into the database
![image of manageradd](https://user-images.githubusercontent.com/50551420/66900338-76a0a480-efb1-11e9-8288-97d03f1c6a48.png)
_added banana to the database_


**viewLow()**

Function that displays inventory that is below 5 in quantity.
![image of managerlow](https://user-images.githubusercontent.com/50551420/66899777-60deaf80-efb0-11e9-8092-b7a9f4fcf71b.png)
_items that are below 5 are displayed_

**removeRequest()**

Inquire prompts what item id to be removed.

**removeFromDatabase(id)**

Function that takes the answer from removeRequest answers
![image of managerremove](https://user-images.githubusercontent.com/50551420/66900557-e44cd080-efb1-11e9-8d58-9788c7c8a24d.png)
_removed item id 6_


**repeat();**

Inquirer prompt asking if the user would like to continue shopping.  If yes the app goes to the inquirePurchase function. If no then connection ends with message.


## Technologies used 
 VsCode
 Node.js
 MySQL