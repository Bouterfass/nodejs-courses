const express = require('express');
const bodyParser = require('body-parser');

const app = express();
/*

    Inotrduction a body-parser (npm install --save body-parser): quand on veut recupérer  
    l'information entrée dans le form (req.body) on a rien, c'est pourquoi on utilise body-parser.

    On utilise le body-parser dans un middleware (donc dans une fonction use())

*/

app.use(bodyParser.urlencoded({extended: false})); //Ligne permettant de récup les informations d'un form (sous format url ???)

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="add a product here..." /><button type="submit">add</button></form>');
});      

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    
});

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome to Express!</h1>');
});      


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})