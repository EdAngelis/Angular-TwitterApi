'use strict'

const router = require('express').Router();

router.get('/', (req, res, next) =>{
    res.json({status:"Servidor Funcionando"});
});

module.exports = router;