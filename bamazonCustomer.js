// npm packages
var inquirer  = require ("inquirer");
var mysql = require ("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Port
    port: 3306,
  
    // username
    user: "root",
  
    // inser your SQL password
    password: "INSERT PASSWORD",
    database: "bamazon_db"
});


start()
function start (){
    connection.query("SELECT * FROM products", function (error, response) {
        if (error) throw error;
        response.forEach(row => {
            console.log(`Id: ${row.item_id} Name: ${row.product_name} Price: ${row.price}\n` )
        });
    })
};


questions()
function questions() {
    inquirer.prompt([
        {
            message: "Type in the product ID to place an order.",
            type: "input",
            name: "productID"
        },
        {
            message: "How many iteams would you like to purchase with us today?",
            type: "input",
            name: "productQTY"
        }
    ]).then(function (response) {
        var productID = response.productID;
        var productQTY = response.productQTY;
        purchase(productID, productQTY)
    });
};

function purchase(productID, productQTY) {
    connection.query("SELECT * FROM products", function (error, response) {
      if (error) throw error;
      var product;
      for(var i = 0; i < response.length; i++){
        if(response[i].item_id == productID){
          product = response[i]
        }
      }
      console.log(product, "Great, we found your item")
        if(product.stock_quantity >= productQTY){
            placedOrder(product, productID, productQTY)
            connection.end()
        }else{
            console.log("We apologize, your iteam is currently out of stock. Please try again later")
            connection.end()
        }
    })
};

function placedOrder (productObj, productID, productQTY) {
    var newQty = productObj.stock_quantity - productQTY;
    var sold = productObj.price * productQTY;
    var queryOne = "UPDATE products SET stock_quantity = ? where ?";
    var queryTwo = "UPDATE products SET product_sales = ? where ?";
    connection.query(queryOne,[newQty, {item_id: productID}], function (error, response) {})
    connection.query(queryTwo, [sold, { item_id: productID }], function (error, response) {})
};