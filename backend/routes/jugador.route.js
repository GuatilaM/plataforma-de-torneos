const express = require('express');
const router = express.Router();
const Jugador = require('../models/Jugador');

//CREATE Jugador
router.post('/crear', async (req, res, next) => {
    try {
        const data = await Jugador.create(req.body);
        console.log(data);
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

//READ Jugador
router.get('/', async (req, res, next) => {
    try {
        const data = await Jugador.find();
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

// UPDATE Jugador
router.route('/editar/:id')
    .get(async(req, res, next) => {
        try {
            const data = await Jugador.findById(req.params.id);
            res.json(data);
        } catch (error) {
            return next(error);
        }
    })
    .put(async(req,res,next) => {
        try {
            const data = await Jugador.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            console.log(data);
            res.json(data);
        } catch (error) {
            return next(error);
        }
    });

// DELETE Jugador
router.delete('/eliminar/:id', async(req, res, next) => {
    try {
        const data = await Jugador.findByIdAndDelete(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});

module.exports = router;