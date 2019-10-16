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


Function takes the userInput (command) and the userQuery (artist), and returns the next concert time and date for that artist, as well as location and city. 
![image of concert-this](https://user-images.githubusercontent.com/50551420/66095636-1a6b6880-e54d-11e9-9fab-976e1acd3106.png)

**inquirePurchase()**


Function takes the userInput (command) and the userQuery (song name), and returns the artist, full track name, a preview link and the album.
![image of spotify-this}](https://user-images.githubusercontent.com/50551420/66095771-a2ea0900-e54d-11e9-8cc5-f5b9fe14d3a9.png)

**purchaseFromDatabasae**


Function takes the userInput( command) and the userQuery (movie name), and returns title, cast, release date, ratings, country of origin, original languages, and synopsis.
![image of movie-this}](https://user-images.githubusercontent.com/50551420/66095763-9a91ce00-e54d-11e9-9a68-a70ba83bed34.png)


# bamazonManager.js
## Functions

**displayAll();**


Function takes the userInput (command) and the userQuery (artist), and returns the next concert time and date for that artist, as well as location and city. 
![image of concert-this](https://user-images.githubusercontent.com/50551420/66095636-1a6b6880-e54d-11e9-9fab-976e1acd3106.png)

**inquireUpdates()**


Function takes the userInput (command) and the userQuery (song name), and returns the artist, full track name, a preview link and the album.
![image of spotify-this}](https://user-images.githubusercontent.com/50551420/66095771-a2ea0900-e54d-11e9-8cc5-f5b9fe14d3a9.png)

**restockRequest()**


Function takes the userInput( command) and the userQuery (movie name), and returns title, cast, release date, ratings, country of origin, original languages, and synopsis.
![image of movie-this}](https://user-images.githubusercontent.com/50551420/66095763-9a91ce00-e54d-11e9-9a68-a70ba83bed34.png)

**restockDatabase**

**addRequest()**

**buildNewItem()**

**removeRequest()**

**removeFromDatabase(id)**

## Technologies used 
 VsCode
 Node.js
 Axios
 Node-Spotify-API
 OMDB API
 Bands In Town API
 Moment
 DotEnv