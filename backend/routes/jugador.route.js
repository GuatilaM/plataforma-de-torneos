const express = require('express');
const router = express.Router();
const Jugador = require('../models/Jugador');

//CREATE Jugador
router.post('/crear', async(req, res, next) => {
    try {
        const data = await Jugador.create(req.body);
        console.log(data);
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

//READ Jugador
router.get('/', async(req, res, next) => {
    try {
         const data = await Jugador.find();
         res.json(data);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;