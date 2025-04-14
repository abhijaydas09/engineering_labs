const mongoose  =  require("mongoose") ;
const module = require("vite");

//connect to mongodb locally :

mongoose.connect("mongodb://localhost:27017/demo").then(
    function(){
        console.log("connected") ;
    }
).catch( function (error){
    console.log("error detected " + error) ;
    process.exit(1) ; // Exit the application on connection error
})


// Define a schema for the "items" collection
const itemSchema = new mongoose.Schema({
    title: String,
    description: String,
});

// Create a model from the schema
const Item = mongoose.model('Item', itemSchema);

// Export the model to use in other files
module.exports = Item;
// use module .exports to export the Item model
// and the mongoose connection
//.exports not working
 module.exports = { mongoose, Item }; 