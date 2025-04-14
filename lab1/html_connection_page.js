import express from "express" ;

const app = express() ;
const port = 3000 ;

app.get('/url_link_is' , (req , res) =>{
    res.sendFile(__dirname + '/html_connection_page.html') ;
}) ;

app.listen(port , () =>{console.log(`Server is running on port ${port}`)} ) ;



