const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const equipoSchema = new Schema({
    nombreEquipo: String,
    nombresIntegrantes: String,
});

const Equipo = model('Equipo', equipoSchema);
module.exports = Equipo;