const express = require('express');
const router = express.Router();
const Torneo = require('../models/Torneo');
const Jugador = require('../models/Jugador');
const Equipo = require('../models/Equipo');

// CREATE Torneo
router.post('/crear', async (req, res, next) => {
    try {
        const data = await Torneo.create(req.body);
        console.log(data);
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

// READ Torneo
router.get('/', async (req, res, next) => {
    try {
        const data = await Torneo.find();
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

// UPDATE Torneo
router.route('/editar/:id')
    .get(async(req, res, next) => {
        try {
            const data = await Torneo.findById(req.params.id).populate('jugadores').populate('equipos');
            res.json(data);
        } catch (error) {
            return next(error);
        }
    })
    .put(async(req,res,next) => {
        try {
            const data = await Torneo.findByIdAndUpdate(
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

// DELETE Torneo
router.delete('/eliminar/:id', async(req, res, next) => {
    try {
        const data = await Torneo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});

// Inscribir jugador
router.put('/inscribir-jugador/:id', async(req, res, next) => {
    try {
        // encontrar el jugador a inscribir
        const jugadorInscribir = await Jugador.findOne(
            {nombreJugador: req.body.nombreParticipante}
        );
        if (!jugadorInscribir){
            throw new Error('Jugador inexistente');
        }
        // encontrar torneo
        const torneo = await Torneo.findById(req.params.id).populate('jugadores');
        // verificar que jugador no esté inscrito
        for (let jugador of torneo.jugadores){
            if (jugador._id.equals(jugadorInscribir._id)){
                throw new Error('Jugador previamente inscrito');
            }
        }
        // actualizar y guardar
        torneo.jugadores.push(jugadorInscribir);
        await torneo.save();

        console.log(torneo);
        res.json(torneo);  
    } catch (error) {
        return next(error);
    }
});

// Inscribir equipo
router.put('/inscribir-equipo/:id', async(req, res, next) => {
    try {
        const equipoInscribir = await Equipo.findOne(
            {nombreEquipo: req.body.nombreParticipante}
        );
        if (!equipoInscribir) {
            throw new Error('Equipo inexistente');
        }
        const torneo = await Torneo.findById(req.params.id).populate('equipos');
        // verificar que equipo no esté inscrito
        for (let equipo of torneo.equipos){
            if (equipo._id.equals(equipoInscribir._id)){
                throw new Error('Equipo previamente inscrito');
            }
        }
        // actualizar y guardar
        torneo.equipos.push(equipoInscribir);
        await torneo.save();

        console.log(torneo);
        res.json(torneo);  
    } catch (error) {
        return next(error);
    }
});

module.exports = router;