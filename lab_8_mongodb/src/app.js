import { Item } from './db.js';
//create a new item

const newItem = new Item({
    title : "sampleItem"  ,
    description:  "helloworld"   ,
}) ;

newItem.save()
    .then(() => {
    console.log('Item saved successfully!');
})
    .catch((err) => {
        console.error('Error saving item:', err);
    });

// Fetch all items from the database
Item.find()
    .then((items) => {
        console.log('Items in the database:');
        console.log(items);
    })
    .catch((err) => {
        console.error('Error fetching items:', err);
    });


