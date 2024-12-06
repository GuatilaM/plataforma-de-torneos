const express = require('express');
const router = express.Router();
const Equipo = require('../models/Equipo');

//CREATE Equipo
router.post('/crear', async (req, res, next) => {
    try {
        const data = await Equipo.create(req.body);
        console.log(data);
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

//READ Equipo
router.get('/', async (req, res, next) => {
    try {
        const data = await Equipo.find();
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

// UPDATE Equipo
router.route('/editar/:id')
    .get(async(req, res, next) => {
        try {
            const data = await Equipo.findById(req.params.id);
            res.json(data);
        } catch (error) {
            return next(error);
        }
    })
    .put(async(req,res,next) => {
        try {
            const data = await Equipo.findByIdAndUpdate(
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

// DELETE Equipo
router.delete('/eliminar/:id', async(req, res, next) => {
    try {
        const data = await Equipo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});

module.exports = router;