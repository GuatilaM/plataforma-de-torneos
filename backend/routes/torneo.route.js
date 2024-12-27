const express = require('express');
const router = express.Router();
const Torneo = require('../models/Torneo');
const Jugador = require('../models/Jugador');
const Equipo = require('../models/Equipo');

const hoy = new Date();

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

// Inscribir o eliminar participante
router.route('/editar-participante/:id')
    .put(async(req, res, next) => {
        try {
            const { numJugadoresEquipo, nombreParticipante } = req.body;
            const esIndividual = numJugadoresEquipo === 1 ? true : false;
            // encontrar el participante a inscribir, sea jugador o equipo
            const participanteInscribir = esIndividual ?
                await Jugador.findOne(
                    {nombreJugador: nombreParticipante}
                ) :
                await Equipo.findOne(
                    {nombreEquipo: nombreParticipante}
                );
            if (!participanteInscribir){
                throw new Error('Participante inexistente');
            }
            // encontrar torneo
            const torneo = await Torneo.findById(req.params.id).populate('jugadores').populate('equipos');
            // validar que el torneo no haya comenzado
            if (hoy >= torneo.fechaInicio){
                throw new Error('Torneo ya ha comenzado');
            }
            // verificar que el participante no esté inscrito y actualizar lista
            if (esIndividual){
                for (let jugador of torneo.jugadores){
                    if (jugador._id.equals(participanteInscribir._id)){
                        throw new Error('Jugador previamente inscrito');
                    }
                }
                torneo.jugadores.push(participanteInscribir);
            } else {
                for (let equipo of torneo.equipos){
                    if (equipo._id.equals(participanteInscribir._id)){
                        throw new Error('Equipo previamente inscrito');
                    }
                }
                torneo.equipos.push(participanteInscribir);
            }
            // guardar
            await torneo.save();
            // enviar respuesta
            console.log(torneo);
            res.json(torneo);
        } catch (error) {
            return next(error);
        }
    })
    .delete(async(req, res, next) => {});

module.exports = router;