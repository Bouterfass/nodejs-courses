const path = require('path');
const express = require('express');

const router = express.Router();
const products = [];

router.get('/add-product', (req, res, next) => {
    //res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="add a product here..." /><button type="submit">add</button></form>');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});      

router.post('/product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
    
});


exports.routes = router;
exports.products = products;