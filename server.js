const express = require('express');

const app = express();
/*
*
*   .use permet de créer un middleware (soit du code qui va permettre de faire des choses avant la réponse)
*   On a une req et une res tel qu'on les connait mais aussi next: une fonction passer en paramètre.
*
*/

/*
*
*   Dans l'exemple avec les deux .use ci-dessous, on voit en rafraichissant la page que je que le console log
*   du premier app.use qui s'affiche, si je veux afficher le deuxième il faut utiliser la fonction next
*
*/


app.use('/add-product', (req, res, next) => {
    console.log("We are in the middleware!");
    res.send('<h1>The Add product page!</h1>');
});      



app.use('/', (req, res, next) => {
    console.log("We are in the middleware!");
    res.send('<h1>Welcome to Express!</h1>');
});      


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})