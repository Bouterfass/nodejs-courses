const express = require('express');
const path = require('path');
const router = express.Router();



router.get('/', (req, res, next) => {

    //res.send('<h1>Welcome to my shop!</h1>')
    //on veut maintenant envoyer un fichier     HTML
    //path permet de gerer les path sur tout les OS.
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
})


module.exports = router;
