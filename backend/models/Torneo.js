const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const torneoSchema = new Schema({
    nombre: String,
    fechaInicio: Date,
    fechaFin: Date,
    tipo: String,
    descripcion: String,
    numJugadoresEquipo: Number,
    minParticipantes: Number,
});

const Torneo = model('Torneo', torneoSchema);
module.exports = Torneo;