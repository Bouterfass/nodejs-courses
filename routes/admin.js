const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    //res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="add a product here..." /><button type="submit">add</button></form>');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});      

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    
});


module.exports = router;