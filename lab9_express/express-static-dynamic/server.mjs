import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express() ;

//use middleware body-parser

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({extended: true})) ;
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//routes:

app.get("/" , function (req , res){
    res.sendFile(path.join(__dirname, 'public', 'index.html')) ;
}) ;

app.get("/form" , function (req , res){
    res.render("form.ejs") ;
});

app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.send(`<h1>Hello, ${name}!</h1><p>Form submitted successfully.</p>`);
});

// Start the server
app.listen(3395, () => console.log('Server running on http://localhost:3000'));




