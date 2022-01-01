const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); //Ligne permettant de récup les informations d'un form (sous format url ???)
app.use(adminRoutes); //Utiliser les routes créer dans admin dans un middleware
app.use(shopRoutes); //Same pour shop

/**
 * 
 *  Error page handler
 * 
 */

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})