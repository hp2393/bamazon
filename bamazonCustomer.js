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
    password: "INSERT_Password",
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
            message: "Type in the product ID to place an order/",
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
    });
};